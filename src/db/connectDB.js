const mongoose = require("mongoose")

const connectToDatabase = async () => {
    try {
        //Ruta mongo
        const URL_mongo = process.env.URL_mongo
        await mongoose.connect(URL_mongo)
        console.log("conexión a la db realizada con éxito")
    } catch {
        console.log("error con la conexión a la db", error)
    }
}

module.exports = connectToDatabase;