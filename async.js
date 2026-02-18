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







// call backs functionn hmeshaa async code mein answer aane par chalegaa..
// 