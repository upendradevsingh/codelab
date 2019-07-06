# codelab
Code lab / a simple e-commerce project

### Project Set up and installation

#### setup express app
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Node app</title>
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

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Node app listening on port ${port}!`)
});


#### setup client side app



npm i -D webpack  webpack-cli

npm install --save-dev @babel/core @babel/cli @babel/preset-env

npm i -D react react-dom @babel/preset-react

# Setup babel
.babelrc
{
    "presets": ["@babel/env", "@babel/preset-react"]
}

# Setup webpack
webpack.config.js

const path = require('path');
const webpack = require('webpack');

const config = {
    entry: path.resolve(__dirname, 'public/src/index.js')
}

module.exports = config;

#### run webpack

ERROR in ./public/src/index.js 4:16
Module parse failed: Unexpected token (4:16)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| import { ReactDOM } from 'react-dom';
| 
> ReactDOM.render(<div>Hello ReactDom</div>, document.body); 

#### setup babel plugin


module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }

#### add static handler

app.use(express.static('public'))