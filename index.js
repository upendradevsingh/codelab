const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const hooks = require("./app/hooks");

// add more functions to the application
hooks.init(app);

// Routes
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Codelab - Serverless</title>
            <style>
                ${app.locals.blobCss}
            </style>
            <script>window.__PRELOADED_STATE__ = ${JSON.stringify(
              app.locals.products
            )}</script>
        </head>
        <body>
            <div id="wrapper">
                <header>
                    <p class="logo"><span class="logo-icon">#</span> Codelab</p>
                </header>
                <main>
                    <section id="content">
                        <article class="card">
                            <div class="content">
                                <a class="title" href="/listing">Show all products</a>
                            </div>
                        </article>
                        <article class="card">
                            <div class="content">
                                <a class="title" href="/listing">Show all products</a>
                            </div>
                        </article>
                        <article class="card">
                            <div class="content">
                                <a class="title" href="/listing">Show all products</a>
                            </div>
                        </article>
                    </section>
                </main>
                <footer>
                    <script src="/dist/main.js"></script>
                    <p>Copyright 2019 node app</p>
                </footer>
            </div>
        </body>
        </html>
    `);
});

// plugged in a static server
app.use(express.static("public"));

app.listen(port, err => {
  if (err) console.log(err);
  console.log(`Node app listening on port ${port}!`);
});
