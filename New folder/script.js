let firstName = 'John'; // Declaring a variable for first name
let age = 35; // Declaring a variable for age
let hobbyName = 'Coding'; // Declaring a variable for hobby

// Defining an arrow function to log a message twice
const logTwice = () => {  
  // Within this function, there's an attempt to access variables 'name' and 'hobbyName',
  // which are not defined in the scope of this function. Instead, it should access 'firstName' and 'hobbyName'.
  return `Hello, ${firstName} (${age}). I love ${hobbyName}!`
}

// This line attempts to log a message twice using template literals
// However, it's outside any function, so it will result in an error.
const twice = `Hello, ${name} (${age}). I love ${hobbyName}!`

console.log(twice); // This line will throw an error due to the use of 'name' variable, which is not defined
console.log(twice); // This line will also throw an error

logTwice(); // This line will execute the logTwice function but it doesn't log anything as the return value isn't used

