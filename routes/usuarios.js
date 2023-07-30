const { Router } = require("express");
const { check } = require("express-validator");
const {
  getUsuarios,
  crearUsuarios,
  actualizarUsuarios,
  eliminarUsuarios,
} = require("../controllers/usuarios");
const { validarCampos } = require("../middlewares/validaciones");

const router = Router();

router.get("/", getUsuarios);

router.post(
  "/",
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo es obligatorio').not().isEmpty().isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  crearUsuarios
);

router.put("/:id",
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo es obligatorio').not().isEmpty().isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos,
  ], actualizarUsuarios);

router.delete("/:id", eliminarUsuarios);

module.exports = router;
