import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { bookSchema } from '@lily-bookshop-website/schema'

import { connect } from '../utils'

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  if (!event.body) {
    return {
      statusCode: 400,
    }
  }

  const data = JSON.parse(event.body)

  if (!bookSchema.isValidSync(data, { strict: true })) {
    return {
      statusCode: 400,
    }
  }

  const db = await connect('bookshop')

  const book = await db
    .collection('books')
    .insertOne(bookSchema.cast(data, { stripUnknown: true }))

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  }
}
