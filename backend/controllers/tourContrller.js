import Tour from '../models/Tour.js'

//create new tour

export const createTour = async(req,res)=>{
    const newTour = new Tour(req.body)
    try {

       
        const savedTour = await newTour.save()
        res.status(200).json({success:true,message:'successfully created',
    data:savedTour})



    } catch (error) {
        const savedTour = await newTour.save()
        res.status(500).json({success:false,message:'Failed to create,Try again'})
    }
}
//update tour
export const updateTour = async(req,res) => {

    const id = req.params.id

    try {
        
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        },{new:true})
        res.status(200).json({success:true,message:'successfully updated',
    data:updatedTour})

    } catch (error) {
        res.status(500).json({success:false,message:'Failed to update,Try again',
    data:updatedTour})
    }
}
//delete tour
export const deleteTour = async(req,res) => {
    const id = req.params.id

    try {
        
       await Tour.findByIdAndDelete(id);
        res.status(200).json({success:true,message:'successfully deleted'})

    } catch (error) {
        res.status(500).json({success:false,message:'Failed to delete,Try again'})
    }
}

//get one tour
export const getSingleTour = async(req,res) => {
    const id = req.params.id

    try {
        
       const tour = await Tour.findById(id);
        res.status(200).json({success:true,message:'successfully show',
    data:tour});

    } catch (error) {
        res.status(404).json({success:false,message:'Not found',
    data:tour})
    }
}

//get all tour
export const getAllTour = async(req,res) => {

    try {
    const tours = await Tour.find({})
    res.status(200).json({success:true,message:'successfully show all',
    data:tours})
    } catch (error) {
        res.status(404).json({success:false,message:'Not found',
        data:tours})
    }
}

//get tour by search
 export const getTourBySearch = async(req,res)=>{

    // i -> case sensitive
    const city = new RegExp(req.query.city, 'i')
    const duration =  parseInt(req.query.duration)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    const specialty = new RegExp(req.query.specialty, 'i')

    try {
        const tours = await Tour.find({city,duration:{$gte:duration},
        maxGroupSize:{$gte:maxGroupSize},specialty})

        res.status(200).json({success:true,message:'successfull',
    data:tours})
    } catch (error) {
        res.status(404).json({success:false,message:'Not found',
        data:tours})
    }
 }


