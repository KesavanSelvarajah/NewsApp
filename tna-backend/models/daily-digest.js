const mongoose = require('mongoose');

//Daily digest Schema
const dailyDigestSchema = mongoose.Schema({
    ddItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NewsChunk',
        required: true
    }],
    dateDigested: {
        type: Date,
        default: Date.now
    }
})

dailyDigestSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

dailyDigestSchema.set('toJSON', {
    virtuals: true,
});

exports.DailyDigest = mongoose.model('DailyDigest', dailyDigestSchema);
