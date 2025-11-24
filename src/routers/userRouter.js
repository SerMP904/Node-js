const express = require("express");
const {
  getAllUsers,
  getUsersById,
  insertNewUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getAllUsers);

router.get("/:idUser", getUsersById);

router.post("/", insertNewUser);

router.delete("/delete/:idUser", deleteUser);

module.exports = router;
const users = {
  user1: "a",
  user2: "b",
};
const { user1, user2 } = users;
