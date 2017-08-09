const readline = require('readline');

/* Configure the readline Interface. */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*The main logic of the console program goes in here.
  TODO: Remove these comments!*/
rl.question('Hi. What\'s your age? ',{
  //TODO: Fill this part!
  rl.close(); // IMPORTANT
});
