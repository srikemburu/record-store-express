const express = require('express');
const router = express.Router();
const Records = require('../models/records.js');

// find all documents
// executes, passing results to callback

router.get('/', (req, res)=>{
    Records.find({}, (err, foundRecords)=>{
        res.json(foundRecords);
    });
});

router.get('/:id', (req, res)=>{
    Records.findById(req.params.id, (err, foundRecord)=>{
        res.json(foundRecord);
    });
});

router.delete('/:id', (req, res)=>{
    Records.findByIdAndRemove(req.params.id, (err, deletedRecord)=>{
        res.json(deletedRecord);
    });
});

//...farther down the page

router.post('/', (req, res)=>{
    Records.create(req.body, (err, createdRecord)=>{
        res.json(createdRecord); //.json() will send proper headers in response so client knows it's json coming back
    });
});

router.put('/:id', (req, res)=>{
    Records.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecord)=>{
        res.json(updatedRecord);
    });
});

module.exports = router;