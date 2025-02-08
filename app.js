import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";

const app = express(); // express instance
const server = createServer(app);
const PORT = 4000;

const io = new Server(server, {
    cors: {
        origin: [process.env.DEV_URL || "http://localhost:3000"],
        methods: ["GET", "POST"]
    }
}); // socket io instance

const corsOptions = {
    origin: [process.env.DEV_URL || "http://localhost:3000"],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);
    socket.emit("hello", "My name is expressjs, it is finally nice to meet you Abhilash.");
    socket.on("disconnect", () => console.log("User disconnected"));
}); 



app.get("/", (req, res) => {
    console.log(req.headers.origin)
    res.send({ message: "Welcome to expressjs" });
});
server.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});