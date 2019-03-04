FROM node:10.13.0-slim

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN apt-get update && apt-get install bzip2 && wget http://idealclover.top/phantomjs-2.1.1-linux-x86_64.tar.bz2 -P /tmp/phantomjs/
# RUN npm install phantomjs-prebuilt -g --registry=https://registry.npm.taobao.org
RUN npm install --registry=https://registry.npm.taobao.org
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "build-web" ]


