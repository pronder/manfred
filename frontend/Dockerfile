# Installs Node.js image
FROM node:16.13.1-alpine3.14

# sets the working directory for any RUN, CMD, COPY command
# all files we put in the Docker container running the server will be in /usr/src/app (e.g. /usr/src/app/package.json)
WORKDIR /var/manfred

# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
COPY . .

# Installs all packages
RUN yarn install

EXPOSE 5555

# Runs the dev yarn script to build & start the server
CMD yarn start
