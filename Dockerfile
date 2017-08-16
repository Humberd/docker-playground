# docker-machine env default | Invoke-Expression
FROM node:8.3.0-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 4321

CMD ["npm", "start"]

