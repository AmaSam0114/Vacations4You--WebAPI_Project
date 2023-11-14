import express  from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from "cookie-parser";
import tourRoute from './routers/tours.js'
import userRoute from './routers/users.js'
import authRoute from './routers/auth.js'
import reviewRoute from './routers/review.js'
import bookingRoute from './routers/booking.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corOptions = {
    origin:true,
    Credential:true
}


//database connection
mongoose.set('strictQuery',false);
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('MogoDB database connected');

    } catch (error) {
        console.log('MogoDB database connection failed');
    }
}

//middleware
app.use(express.json())
app.use(cors(corOptions))
app.use(cookieParser())
app.use('/api/v1/tours', tourRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/booking', bookingRoute)

app.listen(port, ()=>{

    connect();
    console.log('server listening on port',port)


})