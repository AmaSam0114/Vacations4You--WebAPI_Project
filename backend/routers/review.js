import express from 'express'
import { createReviews } from '../controllers/reviewController.js'
//import { verifyUser } from '../utilis/verifyToken.js'
const router = express.Router()

router.post('/:tourId', createReviews)

export default router