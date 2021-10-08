const mongoose = require('mongoose');

const trendSchema = mongoose.Schema({
    tttItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NewsChunk',
        required: true
    }],
    dateTrended: {
        type: Date,
        default: Date.now
    }
})

trendSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

trendSchema.set('toJSON', {
    virtuals: true,
});

exports.Trend = mongoose.model('Trend', trendSchema);
