const path = require('path')

// It will return my plataform especific separator
console.log(path.sep)

const filePath = path.join('/content', '/subfolder', 'test.txt')


// This will print on the screen the full path of the object in this case test.txt
console.log(filePath)


const base = path.basename(filePath)
console.log(base)


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'teste.txt')

console.log(absolute)