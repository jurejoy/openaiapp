# Use an official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the image
COPY package*.json ./

# Install the application dependencies
RUN npm install
RUN npm install react react-dom
RUN npm install semantic-ui-react semantic-ui-css
RUN npm install openai


# Copy the application code to the image
COPY . .

# Specify the command to run when the container starts
CMD [ "npm", "start" ]
