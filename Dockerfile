FROM node:16-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
#COPY package.json ./
COPY Referidos-Front/package.json .
RUN npm install
COPY . ./
CMD ["npm", "test"]