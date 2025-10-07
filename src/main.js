//arrow function
const add = (a, b) =>  console.log(a + b);

const square = number => number ** 2

//function declaration
function square(number) {
  return number ** 2;
}

//dummy object declaration for a method
const user = {
  username: "Mark",
  password: "sqerjkhmtdi6dt",
  email: "gitaumark502@gmail.com"
}

//Template literals
const firstName = "Mark";
const lastName = "Kinyanjui";
const birthYear = 2002;

console.log(`My name is ${firstName} ${lastName}.
   I am ${2025- birthYear} years old`);
