const mongoose = require('mongoose');

const schemaUser = mongoose.Schema({
  email:{
    type: String
  },
  nombres:{
    type: String
  },
  apellidos:{
    type: String
  },
  password:{
    type: String
  },
  matricula:{
    type: String
  },
  Periodo:{
    type: Number,
    enum: [1,2,3,4,5,6,7,8,9,10.11]
  },
  Carrera:{
    type: String,
    enum: ['Tecnologias de la Informacion', 'Derecho', 'Administracion de Empresas', 'Desarrollo de Negocios', 'Relaciones Internacionales', 'Ingenieria Civil', 'Ingenieria Biomedica', 'Medicina']
  },
  Facultad:{
    type: String,
    enum: ['Ingenieria', 'Ciencias de La Salud', 'Humanidades', 'Administracion']
  }
});

const user = mongoose.model('user', schemaUser);

module.exports = user;