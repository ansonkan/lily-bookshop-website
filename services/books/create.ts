import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

import { connect } from '../utils'

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  if (!event.body) {
    return {
      statusCode: 400,
    }
  }

  const data = JSON.parse(event.body)

  const db = await connect('bookshop')

  const book = await db.collection('books').insertOne(data)

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  }
}
