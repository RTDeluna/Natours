const express = require('express');
const tourController = require('./../Controllers/tourController');

const router = express.Router();

router.param('id', tourController.checkID);

//todo Create checkBody middleware
//todo Check if body contains the name and price property
//todo if not, send back 400 (bad request)
//todo Add it to the post handler stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
