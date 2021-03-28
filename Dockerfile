FROM node:14.16.0-buster-slim as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY ./ ./
RUN npm run build

FROM node:14.16.0-buster-slim as dev

WORKDIR /app
COPY --from=build /app ./

CMD ["npm", "run", "start-dev"]

FROM node:14.16.0-buster-slim as prod

WORKDIR /app
COPY --from=build /app ./
RUN npm prune --production

CMD ["node", "build/index.js"]
