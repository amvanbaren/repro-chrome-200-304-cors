const http = require('http')

http.createServer((req, res) => {
    if(req.url !== '/content') {
        res.statusCode = 404;
        return res.end();
    }
    if(req.headers['if-none-match'] === 'HELLO-API') {
        res.statusCode = 304;
        console.log('API | 304');
        return res.end();
    }

    console.log('API | 200');
    res.setHeader('etag', 'HELLO-API');
    res.setHeader('access-control-allow-origin', '*');
    res.end(JSON.stringify({ content: 'Hello World!' }));
}).listen(7777, () => {
    console.log(`Server running at http://0.0.0.0:7777/`);
});
