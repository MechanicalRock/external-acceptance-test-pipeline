console.log('Start a long running process asynchronously. e.g. E2E tests etc.')

console.log('Once complete, the async process triggers the custom pipeline using the same BB commit...')
var req = require('request-promise')

var credentials = process.env.BB_CREDS.split(':')
var commit = process.env.BITBUCKET_COMMIT
var apiEndpoint = 'https://api.bitbucket.org/2.0/repositories/mechanicalrock/external-acceptance-test-pipeline/pipelines/'

var requestJson={
    "target": {
     "commit": {
        "hash": commit,
        "type":"commit"
      },
       "selector": {
          "type":"custom",
             "pattern":"deployment-to-prod"
         },
       "type":"pipeline_commit_target"
  }
 }

req({
    uri: apiEndpoint,
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(requestJson),
    json: false,
    auth: {
        user: credentials[0],
        pass: credentials[1],
        sendImmediately: true
      }
}).then(response => { console.log(response) }).catch(err => console.log(err))