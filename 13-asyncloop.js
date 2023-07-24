// Using the event loop
// The setTimeout is async
console.log('first')

setTimeout(() => {
    console.log('second')
}, 0);
console.log('third')