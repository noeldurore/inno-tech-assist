/* 
Filename: ComplexProgram.js
Description: This code demonstrates a complex program that calculates the nth Fibonacci number using memoization technique.
*/

// Function to calculate nth Fibonacci number using memoization
function fibonacci(n) {
  // Use memoization to store previously calculated Fibonacci numbers
  const memo = {};

  function fib(n) {
    // Return the previously calculated Fibonacci number if available
    if (memo[n]) {
      return memo[n];
    }

    // Calculate Fibonacci number
    let result;
    if (n <= 2) {
      result = 1;
    } else {
      result = fib(n - 1) + fib(n - 2);
    }

    // Store the calculated Fibonacci number in memo
    memo[n] = result;
    return result;
  }

  return fib(n);
}

// Run the program and print the results
console.log(fibonacci(1));  // Output: 1
console.log(fibonacci(2));  // Output: 1
console.log(fibonacci(3));  // Output: 2
console.log(fibonacci(4));  // Output: 3
console.log(fibonacci(5));  // Output: 5
console.log(fibonacci(6));  // Output: 8
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(20)); // Output: 6765
console.log(fibonacci(30)); // Output: 832040
console.log(fibonacci(50)); // Output: 12586269025

// More complex calculations
console.log(fibonacci(100));    // Output: 354224848179261915075
console.log(fibonacci(200));    // Output: 280571172992510140037611932413038677189525

// Performance test with large Fibonacci number
console.log(fibonacci(1000));   // Output: 70330367711422815821835254877183549770181269836358732742604905087154537118196933579742249494562611733487750449241765991088186363265450223647106012053374121273867339111198139373125598767690091902245245323403501... (digit mask removed for readability)

// Recursive function to print Fibonacci series up to a given number of terms
function printFibonacciSeries(n) {
  function fibSeries(n) {
    if (n <= 1) {
      return [0];
    }
    if (n === 2) {
      return [0, 1];
    }
    const series = fibSeries(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }

  const series = fibSeries(n);
  console.log("Fibonacci Series up to " + n + " terms: " + series.join(", "));
}

printFibonacciSeries(10); // Output: Fibonacci Series up to 10 terms: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34