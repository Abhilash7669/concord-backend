import express from "express";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);
const PORT = 4000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
});

app.get("/", (req, res) => {
    res.send({ message: "Welcome to expressjs" });
});