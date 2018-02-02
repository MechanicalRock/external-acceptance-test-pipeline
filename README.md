# external-acceptance-pipeline

Automated verification (testing) is a key part of any Continuous Delivery pipeline.

One aspect is post deployment verification - ensuring the deployment/rollout was successful.

These include:
 - Smoke Tests
 - E2E Testing

These tasks may be long running and require external execution/invocation.

This project provides an example of how to create an automated bitbucket pipeline including external, 'long running' stage gates.

# WHAT

![pipeline-flow](doc/staged-deployment-gates/staged-deployment-gates.001.png)

# Setup

TODO - detail setup steps here

# Development

In one terminal shell:

```
docker-compose run --rm dev-env-aws
bash-4.3# ./assumeRole.sh
```

Copy the output (example):

```
export AWS_DEFAULT_REGION=ap-southeast-2
export AWS_ACCESS_KEY_ID='SAMPLE'
export AWS_ACCESS_KEY='SAMPLE'
export AWS_SECRET_ACCESS_KEY='SAMPLE'
export AWS_SECRET_KEY='SAMPLE'
export AWS_SESSION_TOKEN='SAMPLE'
export AWS_SECURITY_TOKEN='SAMPLE'
export AWS_DELEGATION_TOKEN='SAMPLE'
```

Start a new terminal:
```
docker-compose run --rm dev-env
```

Paste the export commands from above

Deploy the project:

```
node_modules/.bin/serverless deploy
```
 
