FROM node:16.16.0 as base

WORKDIR /var/manfred/

COPY . .

RUN yarn install
RUN yarn build

RUN rm -rf dist/__tests
COPY src/public dist/src/public

EXPOSE 3000
CMD ["dist/src/server.js"]
