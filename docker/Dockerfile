from node:4.1.1

RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app

COPY app /usr/local/app
RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]
