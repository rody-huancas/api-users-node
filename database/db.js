const mongoose = require('mongoose');
require('dotenv').config()

// crar la conexión a la bd
const db_CONN = async () => {
    try {
        await mongoose.connect(process.env.db_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('se conectó a la base de datos');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    db_CONN
}