FROM node:16.16.0 as base

COPY package.json ./
COPY yarn.lock ./
COPY scripts/dev.sh ./scripts/dev.sh

RUN yarn install

COPY src ./src
COPY tsconfig.json ./tsconfig.json
COPY openapi.json ./openapi.json

RUN yarn build

FROM gcr.io/distroless/nodejs:16

COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist

COPY src/public dist/src/public

EXPOSE 3000
CMD ["dist/src/server.js"]
