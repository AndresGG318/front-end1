FROM node:19-alpine

WORKDIR /app1

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]