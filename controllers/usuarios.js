const { response } = require("express");
const Usuarios = require("../models/usuarios");

const getUsuarios = async (req, res = response) => {
    try {
        const usuarios = await Usuarios.find({}, 'nombre email curp role');
        res.status(200).json({
            ok: true,
            usuarios
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        });
    }

};

const crearUsuarios = async (req, res) => {
    const { nombre, email, password } = req.body;

    try {
        const existeEmail = await Usuarios.findOne({ email });
        if (existeEmail)
            return res.status(400).json({ ok: false, msg: "El correo ya existe" });

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

const actualizarUsuarios = async (req, res) => {

    const uid = req.params.id;

    try {
        const existeUsuarioDB = await Usuarios.findById(uid);

        // campos => todo lo que contiene el body
        const { password, email, ...campos } = req.body;
        if (existeUsuarioDB.email !== email) {
            const existeEmail = await Usuarios.findOne({ email })
            if (existeEmail) return res.status(400).json({ ok: false, msg: 'Ya existe un usuario con ese correo' })
        }

        campos.email = email;
        const usuarioActualizado = await Usuarios.findByIdAndUpdate(uid, campos, { rawResult: true });

        res.status(200).json({
            ok: true,
            msg: "Usuario actualizado correctamente",
            usuario: usuarioActualizado
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se econtró el usuario con ese ID',
            error
        })
    }
};

const eliminarUsuarios = async (req, res) => {
    const uid = req.params.id;

    try {
        const existeUsuarioDB = await Usuarios.findById(uid);

        if (!existeUsuarioDB) return res.status(404).json({ ok: false, msg: 'No existe usuario con ese ID' });

        // eliminar usuario
        await Usuarios.findByIdAndDelete(uid);

        res.status(200).json({
            ok: true,
            msg: "Usuario eliminado correctamente",
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se econtró el usuario con ese ID',
            error
        })
    }
};

module.exports = {
    getUsuarios,
    crearUsuarios,
    actualizarUsuarios,
    eliminarUsuarios,
};
