import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

import { connect } from '../utils'

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  const id = event.pathParameters?.id

  if (!event.body || !id) {
    return {
      statusCode: 400,
    }
  }

  const data = JSON.parse(event.body)

  const db = await connect('bookshop')

  const result = await db.collection('books').updateOne({ _id: id }, data)

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  }
}
