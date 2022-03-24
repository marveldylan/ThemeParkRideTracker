const { Router } = require('express');
const router = Router();
const rideController = require('../controllers/Controller1.js')


// router.get('/', (req, res) => res.send('This is root!'))
router.get('/', rideController.getAllRides)

module.exports = router;