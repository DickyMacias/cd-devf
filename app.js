const express = require('express');
const { User } = require('./models');
const cors = require('cors');

const app = express();
const bcrypt = require('bcrypt')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ mensaje: 'Hola desde express' });
});

// Post == CREAR
app.post('/user', async (req, res) => {
    r = req.body
    
    try {
        const hashedPassword = await bcrypt.hash(r.password, 10)

        const user = {
            email: r.email,
            nombres: r.nombres,
            apellidos: r.apellidos,
            password: hashedPassword,
            matricula: r.matricula,
            periodo: r.periodo,
            carrera: r.carrera,
            facultad: r.facultad
        };
    
        const newUser = User(user);
        
        newUser.save((err, user) => {
            if (err) res.status(400).send(err)
            else res.status(201).send(user);
    
        });
    } catch {
        res.status(500).send()
    }
});

// Login
app.post('/users/login', async (req, res) => {
    r = req.body
    const user = users.find(user => user.email = r.email)
    if (user == null) {
        return res.status(400).send('Usuario no encontrado')
    }try{
        if (await bcrypt.compare(r.password, user.password)){
            res.send('Usario ingreso exitosamente')
        } else {
            res.send('Usuario no permitido')
        }
    }catch{
        res.status(500).send()
    }
});


// TODOS LOS HEROES
app.get('/users', (req, res) => {
    User.find().exec()
        .then((respuesta) => {
            res.send(respuesta);
        })
        .catch((err) => {
            res.status(400).send(err)
        })
});

// Devolver un heroe por ID
// http://localhost:3000/hereo/5e8e8f8415ce7d10300ea7a1
app.get('/user/:id', (req, res) => {
    const idUser = req.params.id;
    User.findOne({ _id: idUser }).exec()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send(err)
        });
});

//Actualizar 
// http://localhost:3000/hereo/5e8e8f8415ce7d10300ea7a1
app.patch('/user/:id', (req, res) => {
    const idUser = req.params.id // --> A quien voy a modificar
    const keysToUpdate = req.body // --> Que le voy a modificar
    // findOneAndUpdate(A QUIEN VOY A MODIFICAR, QUE VOY A MODIFICAR, DEVOLVER EL UPDATE)
    User.findOneAndUpdate({ _id: idUser }, {$set: keysToUpdate}, { new: true }).exec()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send(err)
        });
});

// Borrar
// http://localhost:3000/hereo/5e8e8f8415ce7d10300ea7a1
app.delete('/user/:id', (req, res) => {
    const idUser = req.params.id // --> A quien voy a borrar
    User.findOneAndDelete({ _id:idUser }).exec()
        .then(() => {
            res.send({ message: 'Usuario borrado' });
        }).catch((err) => {
            res.status(400).send(err)
        });
})

app.listen(3000, () => {
    console.log('Server on');
});