const userModel = require("../models/userModels");

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (users.length === 0) return res.status(200).send("no hay usuarios");
    res.status(200).send({ status: "Success", data: users });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
  res.status(200).send("hola a todos los usuarios");
};

const getUsersById = async (req, res) => {
  try {
    const { idUser } = req.params;
    const user = await userModel.findById(idUser);
    if (!users) return res.status(200).send("no existe el usuario");
    res.status(200).send({ status: "Success", data: user });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const insertNewUser = (req, res) => {
  const newUser = req.body;
  res.status(200).send(JSON.stringify(newUser));
};

const deleteUser = async (req, res) => {
  try {
    const { idUser } = req.params;
    const user = await userModel.findByIdAndDelete(idUser);
    if (!users) return res.status(200).send("no existe el usuario");
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};



module.exports = { getAllUsers, getUsersById, insertNewUser, deleteUser };
