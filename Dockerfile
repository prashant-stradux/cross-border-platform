# Multi-stage Dockerfile for Angular app built with Angular CLI and served by Nginx

# ---- Build Stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies (leverage docker layer cache)
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy rest of the source
COPY . .

# Build the Angular app (production)
RUN npm run build

# ---- Runtime Stage ----
FROM nginx:1.27-alpine AS runtime

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app from build stage
COPY --from=build /app/dist/stradux /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


