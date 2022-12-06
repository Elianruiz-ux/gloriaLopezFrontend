const express = require('express');
const router = express.Router();

const pool = require('../views/database');


router.get('/', (req, res) => {
    let sql = 'SELECT * FROM EMPLEADO'
    pool.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
});

module.exports = router;