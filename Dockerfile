FROM node:18-alpine as builder
ENV NODE_ENV build

USER root
RUN apk update \
    && apk --update add build-base yarn

USER node
WORKDIR /home/node

COPY --chown=node:node . .
RUN yarn install
RUN yarn build

FROM node:18-alpine

USER root
RUN apk update \
    && apk --update add build-base yarn

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package.json ./
COPY --from=builder --chown=node:node /home/node/tsconfig.json ./
COPY --from=builder --chown=node:node /home/node/yarn.lock ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/__sapper__/build/ ./__sapper__/build/
COPY --from=builder --chown=node:node /home/node/static/ ./static/

EXPOSE 3000
CMD ["yarn", "start"]