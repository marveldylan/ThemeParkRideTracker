const { model } = require('mongoose')
const RideSchema = require('./ride')
const ReviewSchema = require('./review')

const Ride = model('rides', RideSchema)
const Review = model('reviews', ReviewSchema)

module.exports = {
  Ride,
  Review
}