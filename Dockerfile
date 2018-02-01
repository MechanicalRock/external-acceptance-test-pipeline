FROM node:6.10

WORKDIR /app
COPY package.json /app
#RUN yarn install

RUN yarn global add serverless

#RUN serverless create --template aws-nodejs-typescript
ENTRYPOINT '/bin/bash'
