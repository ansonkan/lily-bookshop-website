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
      'GET /': 'functions/lambda.handler',
    },
  })

  stack.addOutputs({
    ApiEndpoint: api.url,
  })
}
