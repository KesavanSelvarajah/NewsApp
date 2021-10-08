const mongoose = require('mongoose');

//News chunk Schema
const newsChunkSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sourceName: {
        type: String,
        required: true
    },
    sourceURL: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
})

newsChunkSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

newsChunkSchema.set('toJSON', {
    virtuals: true,
});

exports.NewsChunk = mongoose.model('NewsChunk', newsChunkSchema);
