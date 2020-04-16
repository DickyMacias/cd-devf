const mongoose = require('mongoose');

const PERIODOS = [0,1,2,3,4,5,6,7,8,9,10.11]
const CARRERAS = ['Tecnologias de la Informacion', 'Derecho', 'Administracion de Empresas', 'Desarrollo de Negocios', 'Relaciones Internacionales', 'Ingenieria Civil', 'Ingenieria Biomedica', 'Medicina']
const FACULTADES = ['Ingenieria', 'Ciencias de La Salud', 'Humanidades', 'Administracion']
const GENERO = ['M','F']
const COMPETENCIAS = ['Trabajo en Equipo','Gestion Gerencial','Proactividad']
const RELACIONES = ['Amistad','Parentesco','Trabajo']


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
  periodo:{
    type: Number,
    enum: PERIODOS,
  },
  carrera:{
    type: String,
    enum: CARRERAS,
  },
  facultad:{
    type: String,
    enum: FACULTADES,
  },
  cv:{
    personal:{
      genero:{
        type: String,
        enum: GENERO
      },
      fecha_nacimiento:{
        type: Date
      },
      telefono:{
        type: Number
      },
      foto:{
        type: String
      },
      domicilio:{
        calle:{
          type: String
        },
        numero:{
          type: Number
        },
        colonia:{
          type: String
        },
        cp:{
          type: String
        },
        ciudad:{
          type: String
        },
        estado:{
          type: String
        }
      },
      about:{
        type: String
      },
      social:{
        facebook:{
          type: String
        },
        twitter:{
          type: String
        },
        linkedin:{
          type: String
        },
        instagram:{
          type: String
        }
      }
    },
    academico:{
      registro:[{
        escuela:{
          type: String
        },
        ubicacion:{
          ciudad:{
            type: String
          },
          estado:{
            type: String
          },
          pais:{
            type: String
          }
        },
        inicio:{
          type: Date
        },
        termino:{
          type: Date
        },
        grado:{
          type: String
        }
      }]
    },
    experiencia:{
      registro:[{
        puesto:{
          type: String
        },
        empresa:{
          type: String
        },
        ubicacion:{
          ciudad:{
            type: String
          },
          estado:{
            type: String
          },
          pais:{
            type: String
          }
        },
        inicio:{
          type: Date
        },
        termino:{
          type: Date
        },
        descripcion:{
          type: String
        }
      }]
    },
    habilidad:{
      registro:[{
        titulo:{
          type: String
        },
        porcentaje:{
          type: Number
        }
      }]
    },
    competencia:{
      registro:[{      
        titulo:{
          type: String,
          enum: COMPETENCIAS
        }
      }]
    },
    referencia:{
      registro:[{
        nombre:{
          type: String
        },
        relacion:{
          type: String,
          enum: RELACIONES
        },
        domicilio:{
          calle:{
            type: String
          },
          numero:{
            type: Number
          },
          colonia:{
            type: String
          },
          cp:{
            type: String
          },
          ciudad:{
            type: String
          },
          estado:{
            type: String
          }
        },
        telefono:{
          type: String
        }
      }]
    }
  },
  last_updated:{
    type: Date
  }
},
{ minimize: false });

const user = mongoose.model('user', schemaUser);

module.exports = user;