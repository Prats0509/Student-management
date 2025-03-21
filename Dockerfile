# Build the APP
FROM node:lts-alpine AS builder
# This "app" is inside image
WORKDIR /app
# This "app" is the app from project
# here I copy the app folder content to the app folder in image
COPY ./app ./dist

# Run Webserver
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]