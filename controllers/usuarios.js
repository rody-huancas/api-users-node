const Usuarios = require("../models/usuarios");

const getUsuarios = (req, res) => {
  res.send({
    ok: true,
    msg: "Obtener usuarios",
  });
};

const crearUsuarios = async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    // instanciar el objeto
    const usuarios = new Usuarios(req.body);

    //Guaradar en la bd
    await usuarios.save();
    res.json({
      ok: true,
      msg: "usuario agregado",
      usuarios,
    });
  } catch (error) {
    res.json({
      ok: false,
      msg: error,
    });
  }
};

const actualizarUsuarios = (req, res) => {
  res.json({
    ok: true,
    msg: "usuario actualizado",
  });
};

const eliminarUsuarios = (req, res) => {
  res.json({
    ok: true,
    msg: "usuario eliminado",
  });
};

module.exports = {
  getUsuarios,
  crearUsuarios,
  actualizarUsuarios,
  eliminarUsuarios,
};
