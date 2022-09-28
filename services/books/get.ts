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

  const book = await db.collection('books').findOne({ _id: new ObjectId(id) })

  if (!book) {
    return {
      statusCode: 404,
    }
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  }
}
