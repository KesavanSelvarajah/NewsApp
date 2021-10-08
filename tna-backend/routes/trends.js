const {Trend} = require('../models/trend');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Get the Trend List
router.get(`/`, async (req, res) => {
    const trendList = await Trend.find().populate('tttItems');

    if(!trendList) {
        res.status(500).json({success: false})
    }
    res.send(trendList);
})

//Get a particular Trend
router.get(`/:id`, async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid Trend Id')
    }

    const trend = await Trend.findById(req.params.id).populate('tttItems');

    if(!trend) {
        res.status(500).json({success: false, message: 'The Trend with the given ID was not found.'})
    }
    res.status(200).send(trend);  
})

//Post a Trend
router.post(`/`, async (req, res) => {
    let trend = new Trend({
        tttItems: req.body.tttItems,
        dateTrended: req.body.dateTrended
    })
    trend = await trend.save();

    if(!trend)
    return res.status(404).send('The Trend cannot be created.')

    res.send(trend);
})

//Update a particular Trend
router.put('/:id', async (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid Trend Id')
    }

    const trend = await Trend.findByIdAndUpdate(
        req.params.id,
        {
            $push: {tttItems: req.body.tttItems},
            dateTrended: req.body.dateTrended
        },
        {new: true}
    )

    if(!trend)
    return res.status(404).send('The Trend cannot be updated.')

    res.send(trend);
})

//Delete a particular Trend
router.delete('/:id', (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid Trend Id')
    }
    
    Trend.findByIdAndRemove(req.params.id).then(trend => {
        if(trend) {
            return res.status(200).json({success: true, message: 'The Trend is deleted.'})
        } else {
            return res.status(404).json({success: false, message: 'The Trend is not found.'})
        }
    }).catch(err=> {
        return res.status(400).json({success: false, error: err})
    })
})

module.exports = router;