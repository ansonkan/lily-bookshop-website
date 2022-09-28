import { StackContext, Api } from '@serverless-stack/resources'

export function MyStack({ stack }: StackContext) {
  const api = new Api(stack, 'api', {
    defaults: {
      function: {
        environment: {
          MONGODB_URI: process.env.MONGODB_URI ?? '',
        },
      },
    },
    routes: {
      'GET    /books': 'books/list.handler',
      'POST   /books': 'books/create.handler',
      'GET    /books/search': 'books/search.handler',
      'GET    /books/{id}': 'books/get.handler',
      'PUT    /books/{id}': 'books/update.handler',
      'DELETE /books/{id}': 'books/delete.handler',
    },
  })

  stack.addOutputs({
    ApiEndpoint: api.url,
  })
}
