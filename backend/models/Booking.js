import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
     
    },
    tourName:{
 type:String,
 required:true

    },
    fullname: {
      type: String,
      required: true,
    },
    guestSize:{
        type: Number,
      required: true, 
    },
    phone:{
        type: String,
      required: true, 
    },
    bookAt:{
        type: Date,
      // required: true, 
    },
    specialty: {
        type: String,
        required: true,
      }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
