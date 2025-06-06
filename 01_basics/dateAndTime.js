let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())  //months are started from 0
myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString())

myCreatedDate = new Date("01-14-2007")  //MM-DD-YYYY
console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(myTimeStamp/1000));

console.log(myDate.getMonth()+1);   //0+1


myDate.toLocaleString("default",{
    weekday: 'long'
})


