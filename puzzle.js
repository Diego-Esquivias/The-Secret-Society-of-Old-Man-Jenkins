const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            res.end(data)
        })
    } else if (req.url === '/about') {
        fs.readFile('./about.html', (err, data) => {
            res.end(data)
        })
    } else {
        fs.readFile('./404.html', (err, data) => {
            res.end(data)
        })
    }
})

server.listen(5000, () => {
    console.log('Server is running on port 5000')
})