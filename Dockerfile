FROM node:18

WORKDIR /app

COPY server ./server
COPY dist ./dist

WORKDIR /app/server
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
