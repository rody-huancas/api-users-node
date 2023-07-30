// dependencias para usar=> npm i dotenv express express-validator mongoose
// ejecutar => npm run dev
const express = require("express");
const { db_CONN } = require("./database/db");
require("dotenv").config();

//crear el servidor
const app = express();

// llamar a la conexion de la bd
db_CONN();

// lectura de un JSON
app.use(express.json());

// usar las rutas del usuario
app.use("", require("./routes/usuarios"));

// escuchar el en el puerto 5000
app.listen(process.env.PORT, () => {
  console.log(`Conectado al puerto ${process.env.PORT}`);
});
