const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); //original not changes
console.log(balance);//100 number

console.log(balance.toFixed(2));


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //23.9

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));



//++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++


console.log(Math);//in console
console.log(Math.abs(-4));

console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));


console.log(Math.max(1,2,3,4,5));   //=>5
console.log(Math.min(1,2,3,4,5));   //=>-1


console.log(Math.random());    //always gives value between 0-1
console.log(Math.floor(Math.random()*10) +1);


const min = 10;
const max  = 20;

console.log(Math.floor(Math.random()*(max-min+1)) + min)







