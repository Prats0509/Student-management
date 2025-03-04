#build the app
FROM node:lts-alpine AS builder

#Run webserver
FROM nginx:alpine

#Copy --from-builder /app/dist /usr/share/
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80