const { response } = require("express");
const { validationResult } = require("express-validator");

const validarCampos = (req, res = response, next) => {
    const errores = validationResult(req);

    // si hay errores
    if (!errores.isEmpty()) {
        const mensajesError = errores.array().map((error) => error.msg);
        return res.status(404).json({ ok: false, errors: mensajesError });
    }

    next(); //si encuentra algo, que continue
};

module.exports = {
    validarCampos,
};
