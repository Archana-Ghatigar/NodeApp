FROM node:latest
EXPOSE 3000
COPY server.js .
CMD ["node","server.js"]