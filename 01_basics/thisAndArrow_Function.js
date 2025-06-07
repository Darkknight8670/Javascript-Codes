const user = {
    username: "vikas",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);  //refer currunt context
        
    }
}

user.welcomeMessage()
user.username = "sam" 
user.welcomeMessage()

console.log(this); //refer empty object
//broeser k andar jo global object h vo h window object

// function chai()
// {
//     let usename ="vikas"
//     //console.log(this.username); this use only in object
    
    
// }
// chai()


const chai = function(){
    let username = "vikas"
    console.log(this);
    
}
chai()      



//Arrow_Function //Function ko hatake paranthesis k aage =>

const code = ()=>{
    let username = "vikas"
    console.log(this);   //this not work in it only in normal function globlal object
    
}

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

//implecite arrow function
const addTwo = (num1,num2)=> num1+num2

console.log(addTwo(3,4));
