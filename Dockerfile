FROM node:10.13.0-slim

WORKDIR /app
COPY package*.json ./

RUN sed -i '/jessie-updates/d' /etc/apt/sources.list\
apt-get update && apt-get install bzip2 && wget http://idealclover.top/phantomjs-2.1.1-linux-x86_64.tar.bz2 -P /tmp/phantomjs/
RUN npm install --registry=https://registry.npm.taobao.org

COPY . .

EXPOSE 3000
CMD [ "npm", "run", "build-web" ]
