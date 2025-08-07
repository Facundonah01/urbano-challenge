FROM node:20 as build

WORKDIR /app

COPY . .

RUN yarn
RUN NODE_OPTIONS=--openssl-legacy-provider yarn build

#---

FROM nginx:alpine

COPY --from=build /app/build/ /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80