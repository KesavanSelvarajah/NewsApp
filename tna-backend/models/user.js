const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },  
    image: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: 'English'
    },
    favCategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    bookmarkedItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NewsChunk'
    }]
})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;