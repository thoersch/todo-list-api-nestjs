FROM node:14

# Create app directory inside container
WORKDIR /opt/todo_list_api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build

#migrations
RUN npm run typeorm migration:run

EXPOSE 8080

# start server
CMD [ "node", "dist/main" ]