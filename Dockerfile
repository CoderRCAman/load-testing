FROM node:21-alpine

WORKDIR /app

COPY  package.json /app/

RUN npm install 

COPY . .
ENV ADDRESS=0.0.0.0 PORT=4000
EXPOSE 4000 
CMD [ "node","index.js" ]