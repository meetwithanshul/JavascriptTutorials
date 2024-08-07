// Object literals

// Objects -> keys and values

const mySymbol = Symbol("Regno")

const user = {
    name: "Anshul",
    phone: 7424801320,
    [mySymbol] : "23MCA1054", // Using Symbol
    location : "Bangalore",
    age : 23,
    isLoggedIn : false
}

// console.log(user[mySymbol])
// user.name = "Ansh"
// Object.freeze(user) // Freezing the value

// console.log(user)

// user.greeting = function(){
//     console.log("Hello!")
// }

// user.greetingTwo = function(){
//     console.log(`Hello, ${this.name}`)
// }

// // console.log(user.greeting)
// console.log(user.greeting())
// console.log(user.greetingTwo())

// *****************************************************************************************************

// const tinderUser = new Object() // Singleton object
const tinderUser = {} // Non-singleton object

tinderUser.id = "23MCA1054"
tinderUser.name = "Anshul"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "abc@gmail.com",
    fullname : {
        firstName : "Anshul",
        secondName : "Sharma"
    },
    phone : {
        Fathers : "9887409402",
        Home : "7424801320"
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.phone)

const obj1 = {1 : "A", 2 : "B"}
const obj2 = {3 : "C", 4 : "D"} 
// const obj3 = Object.assign({}, obj1, obj2) // {} means all values will be combined and guarenteed result will be an object
// {} -> target and obj1.... source
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const users = [
    {
        id : 101,
        name : "B"
    },
    {
        id : 102,
        name : "C"
    },
    {
        id : 103,
        name : "D"
    },
    {
        id : 104,
        name : "E"
    }

]

// user[1].email

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty('isLoggedOut'))


// *******************************************************************************************************************

// Objects Destructuring

course = {
    courseName : "Javascript Tutorials",
    coursePrice : 199,
    courseInstructor : "Hitesh Choudhary"
}

const {courseInstructor} = course
console.log(courseInstructor)

// can call it by other name as well

const {courseInstructor : instructor} = course
console.log(instructor)
