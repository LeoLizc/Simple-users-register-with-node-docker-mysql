# image based on nodejs
FROM node:14.16.1-alpine

# set the working directory to /app
WORKDIR /app

# copy dependencies
COPY [ "package.json", "package-lock.json", "./" ]
# install modules
RUN npm install

# copy the app
COPY . .

EXPOSE 3000

# execute express
# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "cont"]