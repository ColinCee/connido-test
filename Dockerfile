FROM node:14.16.0-buster-slim as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY ./ ./
RUN npm build

FROM node:14.16.0-buster-slim as dev

COPY --from=build ./ ./

CMD ["npm", "run", "start-dev"]

FROM node:14.16.0-buster-slim as prod

COPY --from=build /app ./
RUN npm prune --production

CMD ["node", "build/index.js"]
