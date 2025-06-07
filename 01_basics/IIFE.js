//Imidiatly invoked function expression (IIFE)
//  global scope ke pollution ko hatane k liye IIFE ka use karte h


(function chai(){
    console.log((`DB connected`));
    
})();    //this ; is important to end end context

//()()

//arrow IIFE 
( (name)=>{
    console.log(`DB connected ${name}`);
    
})("vikas");
