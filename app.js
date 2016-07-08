
'use strict';

const express = require('express');
const path = require('path');
const http = require('http');


const port = 8080;

let app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, ''));

// static dir setup
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path) => {

        // set cusom headers for .htc polyfills
        let ext = path.substr(path.length - 3);

        if (ext === 'htc') {
            res.set('Content-Type', 'text/x-component');
        }
    }
}));


app.get('*', (req, res) => {
    return res.render('index.html');
});



let server = http.createServer(app);

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
