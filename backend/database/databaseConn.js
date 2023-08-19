import mongoose from "mongoose";

//establishing connection with the database

const conn = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database Connected: ${con.connection.host}`);
    }
    catch (error){
        console.log(error);
        process.exit(1);
    }
}

export default conn;