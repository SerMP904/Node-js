const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        minlength: [2, "el nombre debe tener al menos 3 caracteres"],
        maxlength: 16
    },
    lastName: {
        type: String,
        required: [true, "El apellido es obligatorio"],
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio"],
        unique: [true, "ese correo ya existe"],
        trim: true
    },
    password: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    role: {
        type: String,
        required: [true, "El rol es obligatorio"],
    }
});

const userModel = mongoose.model("Users", userSchema, "user")