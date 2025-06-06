//primitive  

//String Number Boolean null undefined Symbol BigInt

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id===anotherId);

const bignumber = 673486527630n;
console.log(typeof bignumber);


//non-primitive or Refrence Type

//Array, objects, functions

const heros = ["spiderman","ironman","antman"]  //array => object

let obj = {          //object
    name: "vikas",
    age: 22,
}

const myfunc = function()    //function
{
    console.log("hello world");
}

myfunc();



