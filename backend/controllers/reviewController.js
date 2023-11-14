
import Tour from "../models/Tour.js"
import Review from "../models/Review.js"

export const createReviews =async(req,res)=>{

    const tourId = req.params.tourId
    const newrview = new Review({...req.body})

    try {
        const savedreview = await newReview.save()
        //after creating a new review now update the reviews array of the tour
        await Tour.findByIdAndUpdate(tourId,{
            $push: {reviews: savedreview._id}
        })

        res.status(200).json({success:true,message:'Review Submitted',
        data:savedreview})
    } catch (error) {
        res.status(500).json({success:false,message:'failed to submit'})
    }
}