const http = require('http');
const fs = require('fs');

const filePath = 'file.txt';

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(fs.readFileSync(filePath));
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', (buf) => {
            body += buf;
        });
        req.on('end', () => {
            fs.appendFile(filePath, body, (err) => {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Успех!');
            });
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен: ${PORT}`);
});