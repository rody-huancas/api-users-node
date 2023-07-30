const { Schema, model } = require("mongoose");

const UsuariosSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  curp: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "USER_ROLE",
  },
});

module.exports = model("Usuarios", UsuariosSchema);
