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
 
