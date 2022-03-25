const { Router } = require('express');
const router = Router();
const rideController = require('../controllers/Ride.js')
const reviewController = require('../controllers/Review')


router.get('/', rideController.getAllRides)
router.get('/reviews/:id', reviewController.getAllReviews)
router.post('/reviews/new', reviewController.createReview)

module.exports = router;