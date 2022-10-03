FROM node:16.13.1-alpine3.14

WORKDIR /var/manfred

COPY . .

RUN yarn install
RUN yarn build

RUN rm -rf dist/__tests__
COPY src/public dist/src/public

RUN apk add tar xz

RUN wget "https://github.com/mvdan/sh/releases/download/v3.5.1/shfmt_v3.5.1_linux_amd64" -O /usr/local/bin/shfmt
RUN chmod +x /usr/local/bin/shfmt

RUN wget "https://github.com/koalaman/shellcheck/releases/download/v0.8.0/shellcheck-v0.8.0.linux.x86_64.tar.xz" -O- | tar xJ -C /usr/local/bin/ --strip-components=1 --wildcards '*/shellcheck'
RUN chmod +x /usr/local/bin/shellcheck
