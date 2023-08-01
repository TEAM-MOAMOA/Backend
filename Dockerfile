# base image
FROM node:latest

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy source code
COPY . .

# expose the port that Nest.js application runs on
EXPOSE 3000

# start the Nest.js application
CMD ["npm","run","start"]