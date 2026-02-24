/*const express = require('express')
const app = express()
const port = 5000
app.get('/Login',(req, res ) => {
    res.send('Hello WOrld')
})
app.get('/Chaii', (req, res) =>{
    res.send('Pusnsuk Wangdu')
})
app.listen(port,() =>{
    console.log('express app listening on port ${port}')
})  */
//Event Loop 



const http = require ('http');

const server = http.createServer((req, res) =>{
    console.log(req.url , req.method, req.headers);
    res.setHeader('Contnet-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Server</title><head>');
    res.write('<body><h1>Like /Share/Subscribe<h1></body>');
    res.write('</html>');
    res.end();
    
})
const PORT = 3003;
server.listen(PORT, () => {
    console.log('Server running at ')
});



