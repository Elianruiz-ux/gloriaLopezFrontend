//En este archivo arranca la aplicación

const express = require('express');
const morgan = require('morgan');
const passport =require ('passport'); 
const cors =require ('cors'); 

//Initializations

const app = express();
const port = (process.env.port || 3000);
require("../lib/passport");

//Settings

app.set('port', port);

//Middlewares (funciones que se ejecutan cada vez que un usuario manda una petición)

app.use(morgan('dev')); //Utiliza el modulo morgan y lo ejecuta con la palara 'dev'
app.use(express.json());
//app.use(passport.initialize());
//app.use(passport.session());




//Global variables


//Routes

app.use(require('../routes/index'));
app.use(require('../routes/authentication'));
app.use(require('../routes/admin'));
app.use(require('../routes/registro'));


app.use('/api', require('../routes/links'));
app.use('/user', require('../routes/authentication'));
app.use('/admin', require('../routes/admin'));
app.use('/reg', require('../routes/registro'));

app.use('/api/', require('../routes/links'));
app.use('/productos/', require('../routes/productos'));
app.use('/empleado/',require('../routes/empleado'));



//Public (todo el codigo al que el navegación puede acceder)


//Starting the server

app.listen(app.get('port'), (err) => {
    if (err) {
    console.log('Error al iniciar el servidor: ' + err)
    }
    console.log('Server inciando en el puerto: ' + app.get('port'));
});