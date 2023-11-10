# Stage 1: Build the Angular application
FROM node:latest AS build

# Use an official Ubuntu image as the base image
FROM ubuntu:latest

# Install Bash and update the package lists
RUN apt-get update && apt-get install -y bash

# Set the default command to start Bash
CMD ["/bin/bash"]

WORKDIR /app/MAP_Web

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

# Build the Angular application for production
RUN ng build

# Stage 2: Serve the Angular application using Nginx
FROM nginx:alpine

# Copy the built Angular application from the previous stage
COPY --from=build /app /usr/share/nginx/html
