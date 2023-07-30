const { Router } = require("express");
const {
  getUsuarios,
  crearUsuarios,
  actualizarUsuarios,
  eliminarUsuarios,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", getUsuarios);

router.post("/", crearUsuarios);

router.put("/", actualizarUsuarios);

router.delete("/", eliminarUsuarios);

module.exports = router;
