let score = "33ab";
let x = null;
console.log(typeof score);
console.log(typeof(score));

let valueNumber = Number(score);
console.log(typeof valueNumber);
console.log(valueNumber);   //NaN
valueNumber = Number(x);
console.log(typeof valueNumber);
console.log(valueNumber);  //0

// for undefined ==>  NaN
// "33" => 33
// "33ab" => NaN
// true => 1; False => 0

// 1 => true; 0 => False
// "" => False
// "vikas" => true



//************************operations********************************


let str1 = "hello";
let str2 = "vikas";
let str3 = str1 + str2;
console.log(str3);


console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);