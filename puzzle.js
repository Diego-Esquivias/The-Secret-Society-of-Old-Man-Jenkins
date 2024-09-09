const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./puzzle1.html', (err, data) => {
            res.end(data)
        })
    } else if (req.url === '/fortyyears') {
        fs.readFile('./puzzle2.html', (err, data) => {
            res.end(data)
        })
    } else if (req.url === '/forgiveandforget') {
        fs.readFile('./puzzle3.html', (err, data) => {
            res.end(data)
        })
    } else if (req.url === '/twopeasinapod') {
        fs.readFile('./puzzle4.html', (err, data) => {
            res.end(data)
        })
    } else if (req.url === '/readytogo') {
        fs.readFile('./puzzle5.html', (err, data) => {
            res.end(data)
        })
    } else if (req.url === '/foreignlanguage') {
        fs.readFile('./puzzle6.html', (err, data) => {
            res.end(data)
        })
    } else if (req.url === '/pharmacy') {
        fs.readFile('./win.html', (err, data) => {
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