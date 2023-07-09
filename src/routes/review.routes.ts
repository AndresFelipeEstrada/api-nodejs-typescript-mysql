import { Router } from 'express'
import { getReviews, getOneReview, postReview, putReview, deleteReview } from '../controllers/review.controller'

const reviewRouter = Router()

reviewRouter
  .get('/:userId/', getReviews)
  .get('/:userId/:reviewId', getOneReview)
  .post('/:userId/', postReview)
  .put('/:userId/:reviewId', putReview)
  .delete('/:id', deleteReview)

export default reviewRouter

// GET ALL REVIEWS ==> 'localhost:300/api/reviews/userId/'
// GET ONE REVIEW ==> 'localhost:300/api/reviews/userId/reviewId'
// CREATE REVIEW ==> 'localhost:300/api/reviews/userId/'
// UPDATE REVIEW ==> 'localhost:300/api/reviews/userId/reviewId'
// DELETE REVIEW ==> 'localhost:300/api/reviews/userId/reviewId'
