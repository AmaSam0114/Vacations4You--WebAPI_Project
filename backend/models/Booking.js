import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
     
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
        type: Number,
      required: true, 
    },
    bookAt:{
        type: Date,
      required: true, 
    },
    specialty: {
        type: String,
        required: true,
      }
  },
  { timestamps: true }
);

export default mongoose.model("B  ooking", bookingSchema);
