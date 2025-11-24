require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./src/db/connectDB");
const userRouter = require("./src/routers/userRouter")
const movieRouter = require("./src/routers/movieRouter")

const PORT = process.env.PORT || 3000;

const server = express();
server.use(express.json())

connectToDatabase();

server.use(
    cors(
        {
            origin: "http://localhost:5173",
            methods: ["GET", "POST", "PATCH", "OPTIONS"],
            allowedHeaders: ["Content-Type"],
        }
        ))

server.use(express.json());

server.use("/api/movie", movieRouter)
server.use("/api/users", userRouter)

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
