# Stage 1: Build the Angular application
FROM node:latest AS build

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Angular application for production
RUN npm run build --prod

# Stage 2: Serve the Angular application using Nginx
FROM nginx:alpine
docker run --name av-app-container -d -p 8080:80 av-app-image
# Copy the built Angular application from the previous stage
COPY --from=build /app/dist/MAP_Web /usr/share/nginx/html
