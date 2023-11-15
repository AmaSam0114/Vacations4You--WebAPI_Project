import Booking from '../models/Booking.js'

export const createBooking = async(req,res) => {

    const newBooking = new Booking(req.body)

    try {
        const savedbooking = await newBooking.save()
        res.status(200).json({success:true,message:'Your tour is booked',
    data:savedbooking})
        
    } catch (error) {
        res.status(500).json({success:true,message:'internal server error',
    data:savedbooking})
    }
}
//get single booking
export const getBooking = async(req,res) =>{
    const id = req.params.id

    try {
        const book = await Booking.findById(id)
        res.status(200).json({success:true,message:'successfull',
    data:book})
    } catch (error) {
        res.status(400).json({success:true,message:'not found',
        data:book})
    }
}

//get all booking
export const getAllBooking = async(req,res) =>{
    

    try {
        const books = await Booking.find()
        res.status(200).json({success:true,message:'successfull',
    data:books})
    } catch (error) {
        res.status(400).json({success:true,message:'internal server error',
        data:books})
    }
}