FROM node:16-alpine

WORKDIR /usr/src/app
COPY package*.json .

RUN touch tailwind.config.cjs \
    && touch postcss.config.cjs
#Temporary fix for local development with the prefix /api/api
ENV VITE_BACKEND_URL=http://localhost:8080/api/api 
# Install dependencies without copying the entire node_modules directory
RUN npm install
# Copy the rest of the application code
COPY . .


## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
CMD ["npm", "run", "dev"]