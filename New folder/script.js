let firstName = 'John';
let age = 35;
let hobbyName = 'Coding'; // Changed variable name to avoid conflict

const logTwice = () => {  
  return `Hello, ${name} (${age}). I love ${hobbyName}!`
}

const twice = `Hello, ${name} (${age}). I love ${hobbyName}!`
console.log(twice);
console.log(twice);
logTwice();

