import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.URI_DB

const connectDB = async () => {
    try{
        await mongoose.connect(uri)
        console.log('DB Connected');
    }
    catch(error){
        console.error('Database connection error:', error);
        process.exit(1)
    }
}

export default connectDB