//stack (primitive)  ,  heap (Non-Primitive)

let myname = "vikas"
let lastName = myname

lastName = "Barupal"
console.log(lastName);
console.log(myname);




let user1 = {
    email : "user@gmail.com",
    upi: "user@ybl"
}
let user2 = user1;   //refrence  milta h

user2.email = "hitesh@gmail.com"
console.log(user1.email);


