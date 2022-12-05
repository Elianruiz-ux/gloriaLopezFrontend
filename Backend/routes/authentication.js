const express = require('express');
const router = express.Router();
const pool = require('../views/database');

const jwt = require('jsonwebtoken');


router.get('/', (req,res)=>{

    pool.query('select * from USUARIO', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
    
});

router.post('/singin', (req,res) => {
   const {CORREO_CLIENTE, CONTRASENA_CLIENTE} = req.body;
   pool.query('select * from USUARIO where CORREO_CLIENTE=? and CONTRASENA_CLIENTE=?', 
   [CORREO_CLIENTE, CONTRASENA_CLIENTE], (err, rows, fields) => {
    if(!err){
        if(rows.length > 0){
          let data = JSON.stringify(rows[0]);
          const token = jwt.sign(data, 'stil');
          res.json({token});
        }else{
            res.json('Correo o contraseña incorrectas');
        }
    }else{
        console.log(err);
    } 
   })
});


router.post('/test', verifyToken, (req,res) => {
   res.json('Informacion secreta');
 });

function verifyToken(req, res, next){
    if(!req.headers.authorization) return res.status(401).json('No autorizado');
    const token = req.headers.authorization.substr(7);
    
    if(token !== ''){
        const content =jwt.verify(token,'stil');
        req.data = content;
        next();
    }else{
        res.status(401).json('Token vacio');
    }
}


module.exports = router;