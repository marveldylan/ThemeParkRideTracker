const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
    {
        title: { type: String, required: true },
        rating: { type: Number, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
)

// module.exports = Review
module.exports = mongoose.model('reviews', Review)