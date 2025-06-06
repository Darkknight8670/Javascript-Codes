let name = "vikas"
let lastName = "Barupal"
let age = 20
console.log( name + lastName + age);

//Modern Syntex
console.log(`my name is ${name} ${lastName} and my age is ${age}`);  //string interpilation


const gameName = new String("vajeer");

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());  //VAJEER
console.log(gameName);   //[String: 'vajeer'] original change nhi hui h

console.log(gameName.charAt(4));

const newString = gameName.substring(0,4)  //4 not include
console.log(newString);

const anotherString = gameName.slice(-5,4);
console.log(anotherString);


//Most Important Method to Remove whitespaces & line terminaters ==> trim

const newString1 = "      vikas         "
console.log(newString1);

console.log(newString1.trim());


const url = "https://vikas.com/%20barupal"
console.log(url.replace('%20','-'))

console.log(url.includes("vikas"));  //true vikas is present

console.log(url.split('/'));    //[ 'https:', '', 'vikas.com', '%20barupal' ]





