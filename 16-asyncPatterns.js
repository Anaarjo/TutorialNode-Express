/*Esse código printa reqyest event toda vez que a pessoa tenta atualizar a pagina */
const http = require('http')
const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello World')
})

// Intresting it shows in the address http://localhost:50000 the message
server.listen(50000 , () => {
    console.log('Server listening on port: 5000.....')
})