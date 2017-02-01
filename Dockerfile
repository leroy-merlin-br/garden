FROM node:latest

WORKDIR /app

ADD https://www.npmjs.com/install.sh ./install.sh
RUN sh install.sh
