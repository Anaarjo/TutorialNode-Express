const http = require('http');

// criando o servidor 

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
    }
    if (req.url === '/about') {
        // BLOCKING CODE it could be a nested for loop
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }
    // if there's a page that doesnt match with all the resources
    res.end('Error Page')
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})