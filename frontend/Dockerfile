# Use the official Node.js image as base
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Set environment variable to allow npm to work with mismatched lockfile version
ENV NPM_CONFIG_ALLOW_MISMATCHED=true

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
