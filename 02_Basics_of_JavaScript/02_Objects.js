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

user.greeting = function(){
    console.log("Hello!")
}

user.greetingTwo = function(){
    console.log(`Hello, ${this.name}`)
}

// console.log(user.greeting)
console.log(user.greeting())
console.log(user.greetingTwo())