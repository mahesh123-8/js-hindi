//primitive d.t

//7 categories
//1-string
//2.number, 3.Boolean,4.null,5.undefined,6.symbol,7.bigint
const score=100
const scoreValue=100.2

const isLoggedIn=false
const outsideTemp=null
let userEmail;
 
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

//const bigNumber = 34456778678n


//reference dt
//array,object,function
const heros=["shaktiman","hathim","hanuman"]
let myObj={
    name:"mahesh",
    age: 21,
}

const myfunction=function () {
    console.log("hello world");
    
}

console.log(typeof heros);