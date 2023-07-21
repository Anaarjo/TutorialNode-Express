// Diferent ways to access methods

const {readFileSync, writeFileSync} = require('fs');

// Creating variables to read files
// Create a new file in content
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');


console.log(first, second);
// This is like magic it creates a file in the folder you chose and automatically goes there so cool
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)

writeFileSync('./content/thisIsMagic.txt', `This is like magic it automatically goes here wowowowo`) 

console.log('done with this task')
console.log('starting the next one')

