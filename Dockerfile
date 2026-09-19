# Etapa 1: Build Angular
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
COPY angular.json ./
COPY tsconfig*.json ./
COPY .prettierrc ./
COPY public ./public
COPY src ./src

RUN npm ci
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:stable-alpine

COPY --from=build /app/dist/sebastian/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
