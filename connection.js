import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path:'config.env'})


 const connectDB = async() =>{
    try{
        //mongoose.connect("mongodb://localhost:3000/user", { useNewUrlParser: true });
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
       // console.log('MongoDB connected : 3000');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
 }

// module.exports = connectDB;
export default connectDB