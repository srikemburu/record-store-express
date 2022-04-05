const express = require('express');
const router = express.Router();
const Records = require('../models/records.js');

router.get('/', (req, res)=>{
    res.send('index');
});

// find all documents
// executes, passing results to callback


// router.get('/', (req, res)=>{
//     Records.find({}, (err, foundRecords)=>{
//         res.json(foundRecords);
//     });
// });



module.exports = router;