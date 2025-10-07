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


// default parameters
function greet(username = "Guest") {
  console.log(`Hello ${username}`);
  
}
greet("Mark")

function add(a=0, b=0){
  console.log(a+b);
  
}
add()

//spread operator
//1. expanding an array
const number = [1, 2, 3, 4, 5]
console.log(...number);

//2. copying arrays


//3. merging arrays


//4. copy objects


//5. merge objects



//6. overwrite properties


//Rest operator
//collect items into one array



//destructuring
const numbers = [1, 2, 3, 4, 5];
let [num1, num2, num3] = numbers;
console.log(num1, num2, num3);


//use a function for
function myNumbers() {
  return [1, 2, 3, 4, 5];
}
let [num1, num2, num3] = myNumbers();
console.log(num1, num2, num3);

