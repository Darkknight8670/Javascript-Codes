//objects declaration two method ==> literals and constructors
//literals m singleton nhi banta h
//constructor m singleton banta h


//object literals

const mySym = Symbol("key1")


const jsuser = {
    name:"vikas",
    "last_name" : "Barupal",   //you dont have dot option to accesss it 
    age: 18,
    [mySym]: "myKey1",            //For Symbols
    location: "jaipur",
    email: "user@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday","Saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);

//console.log(jsuser."lastname"); wrong

console.log(jsuser["last_name"]);   //Right Method

console.log(jsuser[mySym]);
console.log(typeof jsuser.mySym);

jsuser.email = "vikasbarupal@gmail.com";
console.log(jsuser.email);

//Object.freeze(jsuser);    //now you can not do changes
console.log(jsuser);


jsuser.greetings = function(){
    console.log(`hello Js ${this.name} ${this.last_name}`);
    
}
jsuser.greetings();  //first remove freaze line
console.log(jsuser.greetings);  //[Function (anonymous)]








//object constructor  (singleton)
//Object.create

//const tinderUser = new Object();  //singleton object
const tinderUser = {}   //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vikas",
            lastName: "barupal"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a",6: "b"}
//const obj3 = {obj1,obj2}  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//console.log(obj3);

//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);



const user = [
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  //Most Important because we can use loop on it

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));







