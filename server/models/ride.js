const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ride = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, required: true },
        minHeight: { type: Number, required: true },
        description: { type: String, required: true },
        averageWaitTime: { type: Number, required: true },
        currentWaitTime: { type: Number, required: true },
        status: { type: String, required: true},
        reviews: [{ type: Schema.Types.ObjectId, ref: 'reviews' }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('rides', Ride)