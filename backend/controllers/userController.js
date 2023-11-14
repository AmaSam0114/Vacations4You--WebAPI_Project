import User from '../models/User.js'

//create new user

export const createUser = async(req,res)=>{
    const newTour = new Tour(req.body)
    try {

       
        const savedUser = await newUser.save()
        res.status(200).json({success:true,message:'successfully created',
    data:savedUser})



    } catch (error) {
        const savedUser = await newUser.save()
        res.status(500).json({success:false,message:'Failed to create,Try again',data:savedUser})
    }
}
//update user
export const updateUser = async(req,res) => {

    const id = req.params.id

    try {
        
        const updatedUser = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        },{new:true})
        res.status(200).json({success:true,message:'successfully updated',
    data:updatedUser})

    } catch (error) {
        res.status(500).json({success:false,message:'Failed to update,Try again',
    data:updateUser})
    }
}
//delete user
export const deleteUser = async(req,res) => {
    const id = req.params.id

    try {
        
       await User.findByIdAndDelete(id);
        res.status(200).json({success:true,message:'successfully deleted'})

    } catch (error) {
        res.status(500).json({success:false,message:'Failed to delete,Try again'})
    }
}

//get one user
export const getSingleUser = async(req,res) => {
    const id = req.params.id

    try {
        
       const user = await User.findById(id);
        res.status(200).json({success:true,message:'successfully show',
    data:user});

    } catch (error) {
        res.status(404).json({success:false,message:'Not found',
    data:user})
    }
}

//get all tour
export const getAllUsers = async(req,res) => {



    try {
    const users = await Tour.find({})
    res.status(200).json({success:true,message:'successfully show all',
    data:users})
    } catch (error) {
        res.status(404).json({success:false,message:'Not found',
        data:users})
    }
}