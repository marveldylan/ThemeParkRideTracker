const Reviews = require('../models/review')

const getReviews = async (req, res) => {
        try {
            const reviews = await Reviews.find()
        return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message);
        }
}
module.exports = {
    getReviews
}