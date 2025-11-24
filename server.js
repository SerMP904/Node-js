const express = require("express");
const cors = require("cors");
const server = express();

server.use(express.json())

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

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});