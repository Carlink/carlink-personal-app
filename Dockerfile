# Build the Vue app, then serve the static files with nginx.
#
# Node 16 only exists in the build stage: Vue CLI 4 / webpack 4 do not build
# on newer Node versions. Nothing from it ships in the final image.

FROM node:16.20.2-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# Unprivileged nginx: runs as a non-root user on port 8080.
FROM nginxinc/nginx-unprivileged:1.30.5-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:8080/healthz || exit 1
