const express = require("express");
const app = express();
const hooks = require('../../hooks');
const products = require('../../../_locals/product');

// add more functions to the application
hooks.init(app);

app.get("*", (req, res) => {
    if ((req.headers['content-type'] || '').indexOf('json') !== -1) {
        return res.json({ plp: { products } });
    }
    return res.send(`
    <!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0">
            <title>Codelab - Serverless</title>
            <style>
                ${app.locals.blobCss}
            </style>
            <script>window.__PRELOADED_STATE__ = ${JSON.stringify({ plp: { products } })}</script>
        </head>
        <body>
            <div id="wrapper">
                <header>
                    <p class="logo"><span class="logo-icon">#</span> Codelab</p>
                </header>
                <main>
                    <section id="content">
                    </section>
                </main>
                <footer>
                    <script src="/dist/main.js"></script>
                    <p>Copyright 2019 node app</p>
                </footer>
            </div>
        </body>
        </html>
    `)
});

app.listen();
