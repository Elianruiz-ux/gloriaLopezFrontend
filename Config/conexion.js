const mysql =  require('mysql'); 

const conexion  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'gloria_lopez'
});

conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error en la conexión de la bd: ' + err )
    }else{
        console.log('conexión exitosa')
    }
});

module.exports = conexion; 