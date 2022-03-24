const { Schema } = require('mongoose')

const Review = new Schema(
    {
        title: { type: String, required: true },
        rating: { type: Number, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = Review