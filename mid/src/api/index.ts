import express from "express";
import users from './routes/users';

const api = express();

const port = 8080;

api.get("/status", (req, res) => {
    res.json({ api: 'ok' });
});

api.use(users);

if (process.env['NODE_ENV'] === "production") {
    api.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
}

export default api;