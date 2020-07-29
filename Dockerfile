# Build files
FROM node:12.16.2 AS builder

WORKDIR /usr/build
RUN npm i npm@latest -g

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

# Build dependencies
# FROM node:12.16.2 AS dependencies

# WORKDIR /usr/src/dep
# ENV NODE_ENV production
# COPY package*.json ./
# RUN npm ci

# HTML server
FROM nginx:1.16.0-alpine

# COPY --from=dependencies /usr/src/dep/node_modules /usr/share/nginx/html/
COPY --from=builder /usr/build/build /usr/share/nginx/html/

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
