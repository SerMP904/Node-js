const express = require("express");
const { getAllUsers } = require("../controllers/userController");
const router = express.Router();

router.get("/", getAllUsers)

module.exports = router
const users = {
    user1: "a",
    user2: "b"
}
const {user1, user2} = users