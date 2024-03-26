# Use a smaller base image
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the application code
COPY . .

# Expose port
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
