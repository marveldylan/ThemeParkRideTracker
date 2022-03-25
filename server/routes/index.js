const { Router } = require('express');
const router = Router();
const rideController = require('../controllers/Controller1.js')
const reviewController = require('../controllers/Controller2.js')


router.get('/', rideController.getAllRides)
router.get('/reviews/:id', reviewController.getAllReviews)
router.post('/reviews/:id', reviewController.createReview)

module.exports = router;