const { selectLimit } = require("async");

console.log("start");

setTimeout(() =>{
    console.log("Data locked");
}, 2000);

console.log()
// sync and async kyaa hotaa haii ?
//ans sync line wise hoga ek ke baad ek 
//eg-task1-5sec
//async
//ans- matlv saare kaam ek saath shuru karo jiska ans pehle aaye  ajae uska jawaab dedena pehle...

//async js hai kya ?
// kai baar apka final code depeend hota haii kisis or ke server par is case mein humein nahi pata hota ki answer uske server se kabb laut kar aaega to hum kya nhi kr sakte is writing synnc code isse niptaane k liye hm log async code likh dete hai taaki blocking naa ho jab bhi answer aaye humara respec chalne wala code chal jaae
// //js is not asynchrionous
// 
//async ki poori kahaani 
// kaise pata chalta hai ki sync or async
//stetimeout,setinterval,promises,fetch,axios,XMLHttpreq - inka use kar rahe hai toh  asynchronous hai ye
// sabb'
console.log("helooo")
setTimeout(function){
    console.log("heyy2");
}, 2000)
function()
console.log()
setTimeout console.log
setInterval
//Async 
ProcessingInstruction Promise

console.log
//question on async java script
console.log("A")
setTimeout (() => console.log("b"), 0);
console.log("c");
//out put will be A
//B
//C

console.log("1");
Promise.resolve().then(() => console.log("2"));
console.log("3");

 console.log("Start");
 setTimeout(() => console.log ("timeout"), 0);
 Promise.resolve().then(() => console.log ("promise"));
 console.log("end");







 const p = new Promise(resolve => {
    setTimeout(()=> resolve ("hello"), 1000);
 })
 p.then(console.log);




 Promise.resolve(10)
 .then(num => num*2)
 .then(num => num + 5 )
 .then(console.log);






// call backs functionn hmeshaa async code mein answer aane par chalegaa..
// 