const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const hooks = require('./app/hooks');

hooks.init(app);

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Node app</title>
            <script>window.__PRELOADED_STATE__ = ${JSON.stringify(app.locals.products)}</script>
        </head>
        <body>
            <main>
              The code lab  
            </main>
            <footer>
                <script src="/dist/main.js"></script>
                <p>Copyright 2019 node app</p>
            </footer>
        </body>
        </html>
    `);
});

app.use(express.static('public'));

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Node app listening on port ${port}!`)
});
