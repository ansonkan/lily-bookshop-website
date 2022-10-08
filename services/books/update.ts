import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { ObjectId } from 'mongodb'
import { bookSchema } from '@lily-bookshop-website/schema'

import { connect } from '../utils'

type BookSchemaKeys = Parameters<typeof bookSchema['pick']>['0']

const BOOK_SCHEMA_KEYS: BookSchemaKeys = [
  'isbn13',
  'isbn10',
  'title',
  'subtitle',
  'authors',
  'categories',
  'thumbnail',
  'description',
  'published_year',
  'average_rating',
  'num_pages',
  'ratings_count',
]

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  const id = event.pathParameters?.id

  if (!event.body || !id) {
    return {
      statusCode: 400,
    }
  }

  const data = JSON.parse(event.body)
  const dataKeys = Object.keys(data)

  // Note: Only validate fields given because this handler should be a PATCH request
  const matchedKeys = BOOK_SCHEMA_KEYS.filter((k) => dataKeys.includes(k))
  if (!matchedKeys.length) {
    return {
      statusCode: 400,
    }
  }

  const customSchema = bookSchema.pick(matchedKeys)
  if (!customSchema.isValidSync(data, { strict: true })) {
    return {
      statusCode: 400,
    }
  }

  const db = await connect('bookshop')

  const result = await db
    .collection('books')
    .updateOne({ _id: new ObjectId(id) }, { $set: data })

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  }
}
