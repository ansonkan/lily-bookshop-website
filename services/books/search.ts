import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { ObjectId } from 'mongodb'

import { connect } from '../utils'

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  if (!event.queryStringParameters) {
    return {
      statusCode: 400,
    }
  }

  const { q, excluded_ids, limit, skip } = event.queryStringParameters

  if (!q) {
    return {
      statusCode: 400,
    }
  }

  const _excludedIds = excluded_ids ? excluded_ids.split(',') : []
  let _limit = 10
  let _skip = 0

  try {
    if (limit) _limit = Number.parseInt(limit)

    if (_limit > 100) throw new Error('400')

    if (skip) _skip = Number.parseInt(skip)
  } catch {
    return { statusCode: 400 }
  }

  console.log(q.split(','), _excludedIds)

  const db = await connect('bookshop')

  const books = await db
    .collection('books')
    .aggregate([
      {
        $search: {
          index: 'default',
          compound: {
            should: [
              {
                text: {
                  query: q.split(','),
                  path: [
                    'isbn13',
                    'isbn10',
                    'title',
                    'subtitle',
                    'authors',
                    'categories',
                    'description',
                  ],
                  fuzzy: {},
                },
              },
            ],
          },
        },
      },
      {
        $match: {
          _id: { $not: { $in: _excludedIds.map((id) => new ObjectId(id)) } },
        },
      },
      { $skip: _skip },
      {
        $limit: _limit,
      },
    ])
    .toArray()

  try {
    const searchedIds = books.map((b) => new ObjectId(b._id))

    db.collection('books').updateMany(
      { _id: { $in: searchedIds } },
      { $inc: { searched_count: 1 } }
    )
  } catch {
    // silence this since is optional
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(books),
  }
}
