/* 
Filename: ComplexCode.js
Description: A complex and sophisticated JavaScript code example showcasing various concepts and functionalities.
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of Person
const john = new Person("John Doe", 25);
john.greet();

// Function to calculate factorial
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const num = 5;
console.log(`Factorial of ${num}: ${factorial(num)}`);

// Array of colors
const colors = ["red", "blue", "green"];

// Looping through the colors array
for (let i = 0; i < colors.length; i++) {
  console.log(`Color ${i + 1}: ${colors[i]}`);
}

// Using the map function to transform the colors array
const upperCaseColors = colors.map(color => color.toUpperCase());
console.log(upperCaseColors);

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const numToCheck = 17;
console.log(`Is ${numToCheck} prime? ${isPrime(numToCheck)}`);

// Fetching data from an API using Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(`Error: ${error}`));

// Sorting an array of numbers
const numbers = [4, 2, 8, 5, 1];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

// Asynchronous function using async/await
async function fetchDataFromAPI() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log(`Error: ${error}`);
  }
}

fetchDataFromAPI();

// Class representing a rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area of the rectangle
  calculateArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 8);
console.log(`Area of the rectangle: ${rectangle.calculateArea()}`);

// DOM manipulation example
const button = document.createElement('button');
button.textContent = 'Click Me';
button.addEventListener('click', () => {
  alert('Button clicked!');
});

document.body.appendChild(button);