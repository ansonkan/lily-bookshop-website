import { StackContext, Api, NextjsSite } from '@serverless-stack/resources'

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
      'PATCH  /books/{id}': 'books/update.handler',
      'DELETE /books/{id}': 'books/delete.handler',
    },
  })

  const site = new NextjsSite(stack, 'Site', {
    path: 'frontend',
    environment: {
      API_URL: api.url,
    },
  })

  stack.addOutputs({
    ApiEndpoint: api.url,
    SiteUrl: site.url,
  })
}
