FROM node:14.16.0-buster-slim as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY ./ ./
RUN npm run build

FROM node:14.16.0-buster-slim as dev

WORKDIR /app
COPY --from=build /app ./

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.8.0/wait /wait
RUN chmod +x /wait

CMD /wait && npm run start-dev

FROM node:14.16.0-buster-slim as prod

WORKDIR /app
COPY --from=build /app ./
RUN npm prune --production

CMD ["node", "build/index.js"]
