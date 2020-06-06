const router = require('express').Router();
let tn = require('../models/task.model');

router.route('/').get((req,res)=>{
    tn.find({status:"new"}).
    then(tasks=> res.json(tasks))
    .catch(err=>res.status(400).json('Error'+err));
});


module.exports = router
