let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;

let quotient = (num2 !== 0) ? (num1 / num2) : "Cannot divide by zero";
let remainder = (num2 !== 0) ? (num1 % num2) : "Cannot find remainder with zero";

console.log("First Number: " + num1);
console.log("Second Number: " + num2);
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);

var operation = "Basic Arithmetic";
let studentName = "Nivya";
const version = "v1.0";

console.log("Operation Type: " + operation);
console.log("Created By: " + studentName);
console.log("Program Version: " + version);