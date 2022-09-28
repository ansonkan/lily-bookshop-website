import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { ObjectId } from 'mongodb'

import { connect } from '../utils'

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  const id = event.pathParameters?.id

  if (!id) {
    return {
      statusCode: 400,
    }
  }

  const db = await connect('bookshop')

  const result = await db
    .collection('books')
    .deleteOne({ _id: new ObjectId(id) })

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  }
}
