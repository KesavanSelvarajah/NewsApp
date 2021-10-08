const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Get the Category List
router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();

    if(!categoryList) {
        res.status(500).json({success: false})
    }
    res.status(200).send(categoryList);
})

//Get a particular Category
router.get(`/:id`, async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid Category Id')
    }

    const category = await Category.findById(req.params.id);

    if(!category) {
        res.status(500).json({success: false, message: 'The Category with the given ID was not found.'})
    }
    res.status(200).send(category);  
})

//Post a Category
router.post(`/`, async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon
    })
    category = await category.save();

    if(!category)
    return res.status(404).send('The Category cannot be created.')

    res.send(category);
})

//Update a particular Category
router.put('/:id', async (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid Category Id')
    }

    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon
        },
        {new: true}
    )

    if(!category)
    return res.status(404).send('The Category cannot be updated.')

    res.send(category);
})

//Delete a particular Category
router.delete('/:id', (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid Category Id')
    }
    
    Category.findByIdAndRemove(req.params.id).then(category => {
        if(category) {
            return res.status(200).json({success: true, message: 'The Category is deleted.'})
        } else {
            return res.status(404).json({success: false, message: 'The Category is not found.'})
        }
    }).catch(err=> {
        return res.status(400).json({success: false, error: err})
    })
})

module.exports = router;