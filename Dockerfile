FROM node:10-alpine

RUN mkdir -p /opt/app
RUN apk add --no-cache libc6-compat
ENV NODE_ENV production
EXPOSE 3000

WORKDIR /opt/app
COPY . /opt/app

RUN npm install --no-optional && npm run build

CMD [ "npm", "start" ]
