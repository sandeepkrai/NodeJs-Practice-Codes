//THis is used to import library from online
//and to import locally available library file just write ./http to specify the relative address
const http = require('http');
const routes = require('./routes')


const server = http.createServer(routes.handler);

server.listen(3000);