import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import * as AWS from 'aws-sdk'

export interface ExecutionStatus {
  duration: number,
  success: boolean
}

export const handler: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  console.log('Start a long running process asynchronously. e.g. E2E tests etc.')

  //generate a random number
  let timeToExecute = getRandomInt(100)
  let success = getRandomInt(100) < 50
  
  let lambda = new AWS.Lambda()
  let payload: ExecutionStatus = {
    duration: timeToExecute,
    success: success
  }

  console.log(`The job completed: duration: ${timeToExecute}s, success: ${success}`)

  let succeed = result => cb(null,result)
  let fail = err => cb(err)
  let functionName = process.env.NOTIFY_JOB || 'NOTIFY_JOB_not_set'
  lambda.invoke({FunctionName: functionName, InvocationType: "Event", Payload: payload}).promise().then(succeed).catch(fail)

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}