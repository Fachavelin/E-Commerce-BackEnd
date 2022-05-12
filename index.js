require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./db/config');

/* Crear servidor de express */
const app = express();

/* Conexion a la base de datos */
dbConnection();

/* Cors */
app.use(cors());

/* Lectura y parseo de Json */
app.use(express.json());

/* Rutas */

app.use('api/users', require('./routes/User'));

app.listen(`${process.env.PORT}`, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
