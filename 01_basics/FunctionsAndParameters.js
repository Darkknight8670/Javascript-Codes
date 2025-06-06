
function sayMyName(){
    console.log("vikas Barupal");
    
}

sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
    
// }

// addTwoNumbers(3,5)

function addTwoNumbers(number1, number2){
    return number1+number2;
    
}

const result = addTwoNumbers(3,5)
console.log("Result",result);

function loginUserMessage(userName = "sam"){
    if(!userName){
        console.log("please enter username");
        return
    }
    return `${userName} just logged in`
}



console.log(loginUserMessage("vikas"));



function calculateCartprice(...num1){   //...  =>  rest operator also called spread operator
         return num1
}

console.log(calculateCartprice(200,400,500,2000));


const user1 = {
    username: "hitesh",
    price: "199",   
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

//handleObject(user1)

handleObject({
    username: "vikas",
    price: 399
})


const arr = [200,300,100,400]

function returnSecondvalue(getArray){
    return getArray[1];
}

console.log(returnSecondvalue(arr))
