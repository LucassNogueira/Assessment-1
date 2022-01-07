const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the password validation tool!');

        reader.question("Please validate your password!", function(answer) {
        if (answer.length< 10) {
          console.log("Password is not long enough.");
        } else {
          console.log("That password is long enough!");
        }
      });

