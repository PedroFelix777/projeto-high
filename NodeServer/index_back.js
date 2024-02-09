const http = require('http');
const hostName = '127.0.0.1';
const port = 3000
;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Conten-Type', 'text/plain');
    res.end("Olá Mundo");
});

server.listen(port, hostName, () =>{
    console.log('Servidor rodando')
});