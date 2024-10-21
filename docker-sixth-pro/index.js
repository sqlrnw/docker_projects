const http = require("http");

const hostname = '0.0.0.0';

const port = 3000;

const server = http. createServer ((reg, res) =>{

    res. statusCode = 200;
res. setHeader ( 'Content-Type', "text/plain");

res.end('my sixth project to master docker , mohamed ragap /\n');

});

server.listen(port, hostname, () => {

console. log('Server running at http://S(hostname):$(port)/');

});