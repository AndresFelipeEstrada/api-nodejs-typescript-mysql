import { Reviews } from '../entity/Reviews'
import { ReviewDto } from '../dto/review.dto'
import { User } from '../entity/User'

export const AllReviews = () => {}

export const OneReview = () => {}

export const createReview = async (id:number, newReview:ReviewDto) => {
  const user = await User.findOneBy({ id })

  if (!user) return 'USER_NOT_FOUND'

  const review = new Reviews()
  review.titulo = newReview.titulo
  review.nombre = newReview.nombre
  review.mensaje = newReview.mensaje
  review.user = user

  await Reviews.save(review)
  return review
}

export const updateReview = () => {}

export const deletedReview = () => {}
