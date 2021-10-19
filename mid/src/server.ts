import express from "express";
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import api from './api/index'

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

const port = 8080;

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.use(api);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});