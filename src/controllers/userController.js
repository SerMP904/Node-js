const userModel = require("../models/userModels")

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        if (users.length === 0) return res.status(200).send("no hay usuarios")
        res.status(200).send({status:"Success", data: users})
    } catch (error){
        res.status(500).send({status:"Failed", error: error.message})
    }
    res.status(200).send("hola a todos los usuarios")
}

const getUsersById = (req, res) => {
    const { idUser } = req.params;
    res.status(200).send(`hola al id use: ${idUser}`)
}

const insertNewUser = (req, res) => {
    const newUser = req.body;
    res.status(200).send(JSON.stringify(newUser))
}

module.exports = {getAllUsers, getUsersById, insertNewUser}