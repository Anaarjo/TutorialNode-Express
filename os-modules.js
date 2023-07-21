// Creating variables
// It's a build-in so no need to download the module
const os = require('os')

// info about the current user 

const user = os.userInfo()
console.log(user)

// method which returns the system uptime in seconds 

console.log(`The system Uptime is ${os.uptime()} seconds`)

// Creating an object

const currentOs = {
    name:os.type(),
    relase:os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),

}


console.log(currentOs)