FROM node:13-alpine
WORKDIR /app
ADD     . /app
RUN npm i
CMD ["npm", "start"]