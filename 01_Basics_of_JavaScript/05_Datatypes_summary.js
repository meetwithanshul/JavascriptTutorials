// primirive and non-primitive(Referenced) datatypes

// Primitive datatypes -> call by value -> changes made to copy and not to original memory
// String, Number, Null, Undefined, Boolean, Symbol, BigInt

let id = Symbol('123')
let Newid = Symbol('123')

console.log(id===Newid) // Symbol provides uniqueness to a variable like unique ID


// Non-primitive datatypes -> their reference in the memory can be allocated directly
// Array, Oblects, Functions


// ************************* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof *******************


// ************************* JS is a Dynimacally typed language *************************

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.