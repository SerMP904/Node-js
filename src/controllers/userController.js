const getAllUsers = (req, res) => {
    res.status(200).send("hola a todos los usuarios")
}

const getUsersById = (req, res) => {
    const { idUser } = req.params;
    res.status(200).send(`hola al id use: ${idUser}`)
}

module.exports = {getAllUsers, getUsersById}