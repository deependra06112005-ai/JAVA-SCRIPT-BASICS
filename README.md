# JAVA-SCRIPT-BASICS
//GET => SERVER SE DATA FETCH KARNA HO TAB USE KARTE HAII
//POST => SERVER PAR DATA SEND KARNA HAI TOHH USE KARTE HAI
//PATCH =>SERVER PAR DATA ALREADY HO AUR US DATA KO UPDATE KRNA HO TOH TAB KARTE HAII
//DELETE => SERVER PR DATA HAI US DELETE KARNA HO
//REST Api
//req.params.id-- url se id nikalta haii 
//req.json -- frontend ko data bhejta haii 


//Middle Ware:- a function that runs between request and response..
what is request or response let me clear..
request means..data coming from frontedn and client 
and respons means you send data you send back to client..


Uses  of Middle ware 
1: Logging 
2: Authentication 
3:Body Parsing 
4: error handling 
real example of middle waare
1 airport security checks 
2 id check 
3 final boarding (authentication)
simple get 
app.get("/hello", (req, res) => {
  res.send("Hello from backend 👋");
});


2) Dynamic Route
   app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);

3) Query Params
   app.get("/search", (req, res) => {
  const keyword = req.query.q;
  res.send(`You searched for ${keyword}`);
});
