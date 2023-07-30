const { Schema, model } = require("mongoose");
const { on } = require("nodemon");

const UsuariosSchema = Schema(
  {
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UsuariosSchema.method("toJSON", function () {
  // mostrar todo el obj menos id y pasword
  // esos datos iguak se guardarán en la bd
  const { _id, password, ...object } = this.toObject();
  // reemplar el "_id" por uid
  object.uid = _id;
  return object;
});

module.exports = model("Usuarios", UsuariosSchema);
