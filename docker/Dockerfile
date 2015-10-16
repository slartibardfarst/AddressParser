from node:4.1.1

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY .. /usr/src/app
RUN cd app; npm install

EXPOSE 3000
CMD ["node", "app/index.js"]
