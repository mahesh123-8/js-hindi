//singleton
//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"mahesh",
    age: 21,
   location:"Jaipur",
   [mySym]:"mykey1",
   email:"suthargsheheh@gmail.com",
   isLoggedIn:false,
   lastLoginDays:["monday","tuexcayf"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser[mySym]);

JsUser.email="mahehsihe@gmail.com"
//Object.freeze(JsUser)
JsUser.email="hjsdg@gmail.com";
//console.log(JsUser);


JsUser.greeting=function(){
 console.log("Hllo js");
}
JsUser.greetingtwo=function() {
    console.log(`hello js,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());