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



/*const http = require ('http');

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
}); */



/*const http = require ('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html')
    res.write('<html>');
    res.write('<head><title>Complete Coding</title><head>');
     
    if(req.url ==='/'){
        res.setHeader('Content-type', 'text/html')
        res.write('<html>');
        res.write('<head><title>Complete Heading</title><head>');
        res.write('<h1> Welcome to our channel</h1>');
        res.write('<form>');
        res.write() 
        res.write('</form>')
                return res.end();
    }else if (req.url.toLowerCase() ==='/products'){
        res.write('<h1>Products</h1>');
        return res.end();
    }
    
})*/

    



const http = require('http');
 const server = http.createServer((req,res) =>{
     console.log(req.url ,req.method);
     res.write('
<html lang="en">
<head>
    <title>Myntra</title>
</head>
<body>
    <head>
        <nav>
            <ul>
               <li><a href="/home">Home</a></li>
               <li><a href="/women">Women</a></li>
               <li><a href="/men">Men</a></li>
               <li><a href="/kids">Kids</a></li>
               <li><a href="/cart">Cart</a></li>
            </ul>
        </nav>
  </head>
</body>
</html>
    ');
    res.end();
    });


    server.listen(3002,() =>{
        console.log('Server running on address http://localhost:3002');
    });



    
