import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

import { connect } from '../utils'

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  let limit = 10
  let skip = 0
  const sortBy = event.queryStringParameters?.sort
  const sortOrder = event.queryStringParameters?.order === 'desc' ? -1 : 1

  try {
    if (event.queryStringParameters?.limit)
      limit = Number.parseInt(event.queryStringParameters?.limit)

    if (limit > 100) {
      return {
        statusCode: 400,
      }
    }

    if (event.queryStringParameters?.skip)
      skip = Number.parseInt(event.queryStringParameters?.skip)
  } catch {
    return { statusCode: 400 }
  }

  const db = await connect('bookshop')

  const books = await db
    .collection('books')
    .find(
      {},
      { limit, skip, sort: sortBy ? { [sortBy]: sortOrder } : undefined }
    )
    .toArray()

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(books),
  }
}
