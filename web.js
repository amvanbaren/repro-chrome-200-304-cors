const http = require('http')
const path = require('path')
const { promises: fs } = require("fs");

http.createServer(async (req, res) => {
    if(req.headers['if-none-match'] === 'HELLO-WEB') {
        res.statusCode = 304;
        console.log('WEB | 304');
        return res.end();
    }

    console.log('WEB | 200');
    res.setHeader('etag', 'HELLO-WEB');

    const data = await fs.readFile(path.join(__dirname, 'web.html'), 'utf8');
    res.end(data);
}).listen(9999, () => {
    console.log(`Server running at http://0.0.0.0:9999/`);
});