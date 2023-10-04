FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build

RUN npm install -g serve

RUN rm -rf node_modules && \
    rm package-lock.json && \
    rm -rf src \
    rm -rf tsconfig*

CMD ["serve", "-s", "dist", "-l", "tcp://0.0.0.0:3000"]