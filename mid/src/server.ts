import express from "express";
import webpack, { Configuration } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import api from './api/index'

import config from '../webpack.config.js';

const app = express();
const compiler = webpack(config as Configuration);

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