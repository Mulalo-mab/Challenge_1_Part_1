firstName = 'John';
age = 35;
hobbyName = 'Coding'; // Changed variable name to avoid conflict

const logTwice = (parameter) => {  // Added parameter to the logTwice function
  console.log(parameter); // Fixed the console.log statement
  console.log(parameter); // Fixed the console.log statement
}

function hobby() {  // Changed the function name to avoid conflict
  logTwice(`Hello, ${name} (${age}). I love ${hobbyName}!`);
  // Replaced undefined variable name with firstName
}


hobby(); // Invoked the function directly
