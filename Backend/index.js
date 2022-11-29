require('../Config/conexion'); 

const express = require('express');
const port = (process.env.port || 3000); 

//express
const app = express();

//Admitir tipos de datos
app.use(express.json())

//config
app.set('port',port)

//rutas
app.use('/api',require('./rutas'))


//Iniciar express
app.listen(app.get('port'),(err)=>{
    if(err){
        console.log('Error al iniciar el servidor: ' + err)
    }else{
        console.log('Server inciando en el puerto: ' + port)
    }

})
