//array

const myarr = [1,2,3,4,5]
console.log(myarr.length);


//array methods
 
myarr.push(7);
console.log(myarr);
myarr.pop();
console.log(myarr);


myarr.unshift(9);
console.log(myarr);   //[ 9, 1, 2, 3, 4, 5 ]

myarr.shift();
console.log(myarr);
myarr.shift();
console.log(myarr); //[ 2, 3, 4, 5 ]

console.log(myarr.includes(4));  //4 is present in array

console.log(myarr.indexOf(9));  //not present


const newArr = myarr.join()  //join into string

console.log(myarr);
console.log(newArr);
console.log(typeof newArr);   //string



//slice     spilce


console.log("A ",myarr);

const myn1 = myarr.slice(1,3);
console.log(myn1);
console.log("B ",myarr);

const myn2 = myarr.splice(1,3); //[ 3, 4, 5 ]
console.log(myn2);
console.log("C ",myarr);   //manipulate original operations



const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman","wonder-woman"]

//marvel_heros.push(dc_heros);
console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("vikas"));
console.log(Array.from("vikas"));

console.log(Array.from({name: "vikas"}));  //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));









