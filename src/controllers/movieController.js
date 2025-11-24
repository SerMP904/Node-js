const getAllMovies = (req, res) => {
    res.status(200).send("esto devuelve todas las pelis")
}

module.exports = {getAllMovies}