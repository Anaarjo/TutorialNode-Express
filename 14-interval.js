/* This code will print the second console log and then the first one, to stop it you will 
need to use ctrl + c , because it will print every 2secs ( 2000) Hey Ana*/

setInterval(() => {
    console.log('Hey Ana')
}, 2000);
console.log('I will run first')