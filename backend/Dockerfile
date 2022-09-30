FROM node:16.13.1-alpine3.14

WORKDIR /var/manfred

COPY . .

RUN yarn install
RUN yarn build

RUN rm -rf dist/__tests__
COPY src/public dist/src/public
