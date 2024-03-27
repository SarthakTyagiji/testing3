# Use official Node.js LTS version as base image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
ENV PORT=8000
EXPOSE $PORT

# Set MongoDB URI environment variable
ENV MONGODB_URI="mongodb+srv://webdualitytechnology:MwQiV3OBqSLUYm9P@webdualitytech.7vk6cri.mongodb.net/?retryWrites=true&w=majority&appName=webdualitytech"

# Command to run the application
CMD ["npm", "start"]
