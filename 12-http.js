const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short story')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page that you're looking for</p>
    <a href="/">back home</a>
    `)
})

// Intresting it shows in the address http://localhost:5000 the message
server.listen(50000)