const express = require('express');
const router = express.Router();

const pool = require('../views/database');

//Productos
//Get Productos 
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM PRODUCTO'
    pool.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
});
//Get para un proveedor
router.get('/:IDENTIFICACION_PRODUCTO', (req, res) => {
    const { IDENTIFICACION_PRODUCTO } = req.params
    let sql = 'SELECT * FROM PRODUCTO WHERE IDENTIFICACION_PRODUCTO = ?'
    pool.query(sql, [IDENTIFICACION_PRODUCTO], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

router.post('/', (req, res) => {
    const { IDENTIFICACION_PRODUCTO, NOMBRE_PRODUCTO, FECHA_COMPRA, CANTIDAD_PRODUCTO, IDENTIFICACION_PROVEEDOR } = req.body
    let sql = `INSERT INTO PRODUCTO(IDENTIFICACION_PRODUCTO, NOMBRE_PRODUCTO, FECHA_COMPRA, CANTIDAD_PRODUCTO, IDENTIFICACION_PROVEEDOR) 
    values ('${IDENTIFICACION_PRODUCTO}','${NOMBRE_PRODUCTO}','${FECHA_COMPRA}','${CANTIDAD_PRODUCTO}','${IDENTIFICACION_PROVEEDOR}')`
    pool.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({ status: 'Producto agregado agregado' })
        }
    })
});
router.delete('/:IDENTIFICACION_PRODUCTO', (req, res) => {
    const { IDENTIFICACION_PRODUCTO } = req.params

    let sql = `DELETE FROM PRODUCTO WHERE IDENTIFICACION_PRODUCTO = '${IDENTIFICACION_PRODUCTO}'`
    pool.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({ status: 'Se elimino el producto' })
        }
    })
}); 
router.put('/:ID', (req, res) => {
    const {ID} = req.params
    const {IDENTIFICACION_PRODUCTO, NOMBRE_PRODUCTO, FECHA_COMPRA, CANTIDAD_PRODUCTO, IDENTIFICACION_PROVEEDOR} = req.body

    let sql = `UPDATE PRODUCTO SET
    IDENTIFICACION_PRODUCTO = '${IDENTIFICACION_PRODUCTO}',
    NOMBRE_PRODUCTO = '${NOMBRE_PRODUCTO}',
    FECHA_COMPRA = '${FECHA_COMPRA}',
    CANTIDAD_PRODUCTO = ${CANTIDAD_PRODUCTO},
    IDENTIFICACION_PROVEEDOR = '${IDENTIFICACION_PROVEEDOR}'
    where IDENTIFICACION_PRODUCTO = '${ID}'`
    


    pool.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({status: 'Se modifico la informacion del proveedor'})
        }
    })
})
module.exports = router;