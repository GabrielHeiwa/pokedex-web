FROM node:20-alpine

COPY package.json ./

RUN npm i

COPY . ./

RUN npm run build

CMD ["npm", "start"]
