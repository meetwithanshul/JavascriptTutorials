// const: value cannot be change in the future (PI, and other pre-defined values)
// let: Must use, have a block scope
// var: Should not use, have global scope, value can be change 

const company = "MICROSOFT"
let accountEmail = "work.anshulsharma@gmail.com"
var accountPassword = "1234567890"
city = "Bangalore"

let state; // this will be an undefined variable in JS

// Print separately
console.log(company)
console.log(accountEmail)
console.log(accountPassword)
console.log(city)

// Print within a single tabular structure -> will print like an array with index (starts from 0)
console.table([company, accountEmail, accountPassword, city])