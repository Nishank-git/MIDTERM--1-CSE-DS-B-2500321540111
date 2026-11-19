
const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end('hello abes');
});

// Start server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
