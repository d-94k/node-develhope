const fs = require('fs');
  
const randomNumber = Math.random().toString();
  
fs.writeFile("random.txt", randomNumber, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("Random number:\n");
    console.log(fs.readFileSync("random.txt", "utf8"));
  }
});