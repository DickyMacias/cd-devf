// Se llama la contrasena desde otro archivo para no incluirla. 
//Se agrega al .gitignore
const password = require('./password.js');

const mongoose = require('mongoose');
const User = require('./User');

// conecta la base de datos al ODM
// recibe URL, OPTIONS, CALLBACK
const URL_MONGO = `mongodb+srv://dickymacias:${password}@netsquare-j4yg7.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(URL_MONGO, {useNewUrlParser: true}, (err) => {
  if (!err) console.log('Conexion exitosa')
  else console.log(err);
});

module.exports = { User };