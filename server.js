require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./src/db/connectDB");

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

server.get("/", (req, res) => {
  res.send("Esta es la más básica");
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
