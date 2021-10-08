const {NewsChunk} = require('../models/news-chunk');
const express = require('express');
const { Category } = require('../models/category');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg'
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('Invalid image type');

        if(isValid) {
            uploadError = null
        }
        cb(uploadError, '/Projects/News App/Application/tna-backend/public/uploads')
    },
    filename: function (req, file, cb) {
      const fileName = file.originalname.split(' ').join('-');
      const extension = FILE_TYPE_MAP[file.mimetype];
      cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
  })
  
  const uploadOptions = multer({ storage: storage })

//Get the News Chunk List
router.get(`/`, async (req, res) => {
    let filter = {};
    if(req.query.categories)
    {
        filter = {category: req.query.categories.split(',')}
    }

    const newsChunkList = await NewsChunk.find(filter).populate('category');
    
    if(!newsChunkList) {
        res.status(500).json({success: false})
    }
    res.send(newsChunkList);
})

//Get a particular News Chunk
router.get(`/:id`, async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid News Chunk Id')
    }

    const newsChunk = await NewsChunk.findById(req.params.id).populate('category');

    if(!newsChunk) {
        res.status(500).json({success: false})
    }
    res.send(newsChunk);
})

//Post a News Chunk
router.post(`/`, uploadOptions.single('image'), async (req, res) => {
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')

    const file = req.file;
    if(!file) return res.status(400).send('No image uploaded')

    const fileName = req.file.fileName
    const basePath = `${req.protocol}://${req.get('host')}/Projects/News App/Application/tna-backend/public/uploads/`;

    let newsChunk = new NewsChunk({
        title: req.body.title,
        image: `${basePath}${fileName}`,
        category: req.body.category,
        description: req.body.description,
        sourceName: req.body.sourceName,
        sourceURL: req.body.sourceURL,
    })

    newsChunk = await newsChunk.save();

    if(!newsChunk)
    return res.status(500).send('The News chunk cannot be added.')

    res.send(newsChunk);
})

//Update a particular News Chunk 
router.put('/:id', async (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid News Chunk Id')
    }
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')

    const newsChunk = await NewsChunk.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title,
            image: req.body.image,
            category: req.body.category,
            description: req.body.description,
            sourceName: req.body.sourceName,
            sourceURL: req.body.sourceURL
        },
        {new: true}
    )

    if(!newsChunk)
    return res.status(404).send('The News chunk cannot be created.')

    res.send(newsChunk);
})

//Delete a particular News Chunk 
router.delete('/:id', (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid News Chunk Id')
    }
    NewsChunk.findByIdAndRemove(req.params.id).then(newsChunk => {
        if(newsChunk) {
            return res.status(200).json({success: true, message: 'The News chunk is deleted.'})
        } else {
            return res.status(404).json({success: false, message: 'The News chunk is not found.'})
        }
    }).catch(err=> {
        return res.status(400).json({success: false, error: err})
    })
})

//Get the count of the News Chunks
router.get(`/get/count`, async (req, res) => {
    const newsChunkCount = await NewsChunk.countDocuments()
    
    if(!newsChunkCount) {
        res.status(500).json({success: false})
    }
    res.send({
        newsChunkCount: newsChunkCount
    });
})

module.exports = router;