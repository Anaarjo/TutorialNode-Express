const { readFile, writeFile } = require('fs');

// We run the callback when we are done

// the function readFile

readFile('./content/first.txt', 'utf-8', (err, result) => {
    // Check if there is a error
    if (err) {
        console.log(err);
        return
    }
    //console.log(result)
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        //It is a function so we need to provide the value
        writeFile('./content/reuslt-async.txt',`Here is the result : ${first}, ${second}`,(err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log('done with this task')
            })
         })

})

console.log('starting next task')