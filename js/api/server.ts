import express from "express";
import cors from 'cors';

import api from './index';

const app = express();
const port = 8080;

app.use(cors());

app.use('/', api);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});