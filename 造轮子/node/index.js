const fs = require('fs');
const { promisify } = require('util')
const readFile = promisify(fs.readFile);
const http = require('http');


const server = http.createServer(async (req, rep) => {

    const { url, method, headers } = req;

    if (url === '/' && method === 'GET') {

        const data = await readFile('./index.html');
        rep.end(data)

    } else if (headers.accept.indexOf('image/*') !== -1 && method === 'GET') {
        if (url === '/favicon.ico') return
        fs.createReadStream('./' + url).pipe(rep)

    } else {
        rep.writeHead(404, {
            'Content-Type': 'text/plain;charset=utf-8'
        })
        rep.end("没找到")

    }




})

server.listen(4000, () => {
    console.log('服务已开启')
})