FROM node:16-alpine

WORKDIR /usr/src/app
COPY package*.json .
# Install dependencies without copying the entire node_modules directory
RUN npm install
# Copy the rest of the application code
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
CMD ["npm", "run", "dev"]