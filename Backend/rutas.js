const rutas = require('express').Router()
const conexion = require('../Config/conexion')


//asignar rutas
//Get Proveedor
rutas.get('/', (req, res) => {
    let sql = 'SELECT * FROM proveedor'
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
});

//GET Seleccionar proveedor
rutas.get('/:IDENTIFICACION_PROVEEDOR', (req, res) => {
    const { IDENTIFICACION_PROVEEDOR } = req.params
    let sql = 'SELECT * FROM proveedor WHERE IDENTIFICACION_PROVEEDOR = ?'
    conexion.query(sql, [IDENTIFICACION_PROVEEDOR], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//POST Agregar proveedor
rutas.post('/', (req, res) => {
    const { IDENTIFICACION_PROVEEDOR, NOMBRE_PROVEEDOR, TELEFONO, CORREO, DIRECCION } = req.body
    let sql = `INSERT INTO proveedor(IDENTIFICACION_PROVEEDOR, NOMBRE_PROVEEDOR, TELEFONO, CORREO, DIRECCION) 
    values ('${IDENTIFICACION_PROVEEDOR}','${NOMBRE_PROVEEDOR}','${TELEFONO}','${CORREO}','${DIRECCION}')`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({ status: 'Proveedor agregado' })
        }
    })
});

//DELETE 
//Eliminar proveedor
rutas.delete('/:IDENTIFICACION_PROVEEDOR', (req, res) => {
    const { IDENTIFICACION_PROVEEDOR } = req.params

    let sql = `DELETE FROM proveedor WHERE IDENTIFICACION_PROVEEDOR = '${IDENTIFICACION_PROVEEDOR}'`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({ status: 'Se elimino el proveedor' })
        }
    })
});

//PUT Modificar
rutas.put('/:ID', (req, res) => {
    const {ID} = req.params
    const {IDENTIFICACION_PROVEEDOR, NOMBRE_PROVEEDOR, TELEFONO, CORREO, DIRECCION} = req.body

    let sql = `update proveedor set
    IDENTIFICACION_PROVEEDOR = '${IDENTIFICACION_PROVEEDOR}',
    NOMBRE_PROVEEDOR = '${NOMBRE_PROVEEDOR}',
    TELEFONO = '${TELEFONO}',
    CORREO = '${CORREO}',
    DIRECCION = '${DIRECCION}'
    where IDENTIFICACION_PROVEEDOR = '${ID}'`

    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({status: 'Se modifico la informacion del proveedor'})
        }
    })
})

//------------------------ 


module.exports = rutas; 