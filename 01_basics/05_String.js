const name ="dilip"
const repoCount=4

//console.log(name+repoCount+"Value");

//const gameName=new String('hitsgr')console.log(`Hello my nameis ${name}and my repo Count is ${repoCount}`);
                                           

const gameName=new String("Hiliphc");
// console.log(gameName[6]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('i'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-7,3)
console.log(anotherString);

const newStringOne="  dilip  "
console.log(newStringOne);
console.log(newStringOne.trim());
const url="https://dilip.com/dilip%20suthar"
console.log(url.replace('%20','-'))

console.log(url.includes('dilip'))

console.log(gameName.split('-'));