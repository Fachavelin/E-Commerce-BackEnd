const mongoose = require('mongoose');

const dbConnection = async () => {
  await mongoose
    .connect(`${process.env.BD_CNN}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => {
      return console.log(error);
    });
  console.log('Conectado a la base de datos');
};

module.exports = { dbConnection };
