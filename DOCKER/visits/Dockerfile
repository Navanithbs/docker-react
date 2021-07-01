FROM node:alpine
WORKDIR '/home/navanith/Documents/DOCKER/visits'
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]
