# Stage 1: Build the Angular application
FROM node:latest AS build

WORKDIR /app

FROM ubuntu:latest

# Install Bash and update the package lists
RUN apt-get update && apt-get install -y bash

# Set the default command to start Bash
CMD ["/bin/bash"]

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

# Copy the built Angular application from the previous stage
COPY --from=build /app/dist/MAP_Web /usr/share/nginx/html
