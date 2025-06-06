//destructuring of objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


console.log(course["courseInstructor"]);

const {courseInstructor: instructor} = course  //destructuring

console.log(instructor);

//json structure   keys are in " "    OR   API

// {
//     "name" : "hitesh",
//     "coursename" : "javascript",
//     "price" : "free"
// }

//another types of API
[
    {},
    {},
    {}
]


//randomuser me
//json formatter