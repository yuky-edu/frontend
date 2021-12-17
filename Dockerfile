FROM node:16-alpine

RUN apk update && apk add ca-certificates && update-ca-certificates

RUN mkdir /frontend
COPY . /frontend
WORKDIR /frontend

# RUN npm install
CMD npm run serve
# RUN npm install -g serve
# RUN npm run build
# CMD serve -l 8080 dist