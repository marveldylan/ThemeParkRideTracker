const { model } = require('mongoose')
const RideSchema = require('./Rides')

const Ride = model('rides', RideSchema)

module.exports = {
  Ride
}