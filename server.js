const staticServer = require('node-static');
const http = require('http');

const fileServer = new staticServer.Server('./', { cache: 0 });
const port = 80;

http
  .createServer((request, response) => {
    if (request.method !== 'POST') {
      fileServer.serve(request, response);
    }
  })
  .listen(port);

console.log('Listening on localhost:80');
