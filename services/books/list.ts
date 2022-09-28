import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

import { connect } from '../utils'

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  const db = await connect('bookshop')

  const books = await db.collection('books').find({}).toArray()

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(books),
  }
}
