import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

import { connect } from '../utils'

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  const query = event.queryStringParameters?.q

  if (!query) {
    return {
      statusCode: 400,
    }
  }

  const db = await connect('bookshop')

  const books = await db
    .collection('books')
    .aggregate([
      {
        $search: {
          index: 'default',
          text: {
            query,
            path: {
              wildcard: '*',
            },
          },
        },
      },
      {
        $limit: 25,
      },
    ])
    .toArray()

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(books),
  }
}
