import mongoose from "mongoose";

const connectdb = async()=>{
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");

    }catch(error){
        console.log(error);
    }
}
export default connectdb;