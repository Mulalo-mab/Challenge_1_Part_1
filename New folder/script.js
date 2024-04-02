firstName = 'John';
age = 35;
hobbyName = 'Coding'; // Changed variable name to avoid conflict

const logTwice = () => {  
  return `Hello, ${name} (${age}). I love ${hobbyName}!`
}

const twice = `Hello, ${name} (${age}). I love ${hobbyName}!`
console.log(twice);
console.log(twice);
logTwice();

