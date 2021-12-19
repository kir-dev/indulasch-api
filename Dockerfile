FROM node:16.6.0 as base
ENV PORT=3001
ENV NODE_PATH=./dist
WORKDIR /indulasch-api
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run build
