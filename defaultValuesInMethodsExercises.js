/* 1 Create a method called addNumbers. The function should take 2 numbers as its parameters and return the sum of those numbers. Both parameters should default to 0 if they are not provided. */
const addNumbers = (num1 = 0, num2 = 0) => num1 + num2;

console.log(addNumbers()) // Output 0;
console.log(addNumbers(4, 5)); // Output 9;

/* 2 Create a method called sayHello with 2 parameters, name and greeting. The function should log the greeting followed by the name. The greeting parameter should default to "Hello". */
const sayHello = (name , greeting = "Hello") => `${greeting} ${name}`;
console.log(sayHello("Alex", "Hey there")); // Output Hey there Alex;
console.log(sayHello("Alex")); // Output Hello;