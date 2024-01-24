FROM alpine:latest

WORKDIR /app/coffee-delivery

COPY . .

RUN apk add nodejs npm && \
  npm install -g yarn

RUN yarn

RUN yarn build

EXPOSE 9578

ENTRYPOINT ["yarn", "preview"]