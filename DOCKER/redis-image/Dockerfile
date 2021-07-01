#FROM alpine   // since alpine doesn't have npm in it we need to specify the appropriate base image
FROM node:alpine  
#just node also works but just to be more specific we use :alpine here it selects the node package which contains only alpine 
COPY ./ ./
RUN npm install
CMD ["npm", "start"]
