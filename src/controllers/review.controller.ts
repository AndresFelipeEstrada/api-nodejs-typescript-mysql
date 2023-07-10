import { Request, Response } from 'express'
import { createReview } from '../services/review.service'

export const getReviews = () => {}

export const getOneReview = () => {}

export const postReview = async (req:Request, res:Response) => {
  try {
    const { userId } = req.params

    const newReview = await createReview(+userId, req.body)

    return res.status(200).json(newReview)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const putReview = () => {}
export const deleteReview = () => {}
