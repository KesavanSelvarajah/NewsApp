const {DailyDigest} = require('../models/daily-digest');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const {NewsChunk} = require('../models/news-chunk');

//Get the Daily digest List
router.get(`/`, async (req, res) => {
    const dailyDigestList = await DailyDigest.find().populate('ddItems');

    if(!dailyDigestList) {
        res.status(500).json({success: false})
    }
    res.send(dailyDigestList);
})

//Get a particular Daily digest
router.get(`/:id`, async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid Daily digest Id')
    }

    const dailyDigest = await DailyDigest.findById(req.params.id).populate('ddItems');

    if(!dailyDigest) {
        res.status(500).json({success: false, message: 'The Daily digest with the given ID was not found.'})
    }
    res.status(200).send(dailyDigest);  
})

//Post a Daily digest
router.post(`/`, async (req, res) => {
    let dailyDigest = new DailyDigest({
        ddItems: req.body.ddItems,
        dateDigested: req.body.dateDigested
    })
    dailyDigest = await dailyDigest.save();

    if(!dailyDigest)
    return res.status(404).send('The Daily digest cannot be created.')

    res.send(dailyDigest);
})

//Update a particular Daily digest
router.put('/:id', async (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid Daily digest Id')
    }

    const dailyDigest = await DailyDigest.findByIdAndUpdate(
        req.params.id,
        {
            $push: {ddItems: req.body.ddItems},
            dateDigested: req.body.dateDigested
        },
        {new: true}
    )

    if(!dailyDigest)
    return res.status(404).send('The Daily digest cannot be updated.')

    res.send(dailyDigest);
})

//Delete a particular Daily digest
router.delete('/:id', (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid Daily digest Id')
    }
    
    DailyDigest.findByIdAndRemove(req.params.id).then(dailyDigest => {
        if(dailyDigest) {
            return res.status(200).json({success: true, message: 'The Daily digest is deleted.'})
        } else {
            return res.status(404).json({success: false, message: 'The Daily digest is not found.'})
        }
    }).catch(err=> {
        return res.status(400).json({success: false, error: err})
    })
})

module.exports = router;