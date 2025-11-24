const express = require("express");
const { getAllUsers, getUsersById, insertNewUser, } = require("../controllers/userController");
const router = express.Router();

router.get("/", getAllUsers)

router.get("/:idUser", getUsersById)

router.post("/", insertNewUser)

module.exports = router
const users = {
    user1: "a",
    user2: "b"
}
const {user1, user2} = users