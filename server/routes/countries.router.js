const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const getTodoList = `SELECT * FROM "todos"`
    pool.query(getTodoList)
    .then(result => {
      console.log("results.rows", result.rows);
      res.send(result.rows);
     
    })
    .catch((err) => {
      console.log("ERROR: Get all appointments", err);
      res.sendStatus(500);
    });
  
})

router.post('/', (req, res) => {
   

})

module.exports = router;
