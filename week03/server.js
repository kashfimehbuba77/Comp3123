const http = require('http');
const Students = require('./students');

const SERVER_PORT = 3000;
const SERVER_HOST = 'localhost';

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    if(req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('<h1>Welcome to the Home Page :3</h1>');
    } else if(req.url === '/hello' && req.method === 'GET') {
     res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
    } else if(req.url === '/students' && req.method === 'GET') {
        const students = Students.getAllStudents();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(students)); //Respond with JSON array of students
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found\n'); 
    }
   
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
}); 