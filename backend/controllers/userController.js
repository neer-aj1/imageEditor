import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// post method to register the user
const register = asyncHandler (
    async(req, res) => {
        const {fname, lname, email, password} = req.body;
        const alreadyRegisterd = await User.findOne({email});
        if(alreadyRegisterd){
            res.status(400);
            throw new Error("User already Exists");
        }
        // create a new user and save it in database
        let user =  await User.create({
            fname,
            lname,
            email,
            password
        });

        if(user){
            res.status(200).json({
                fname: user.fname,
                email: user.email,
            });
        }
        else{
            res.status(400);
            throw new Error('Invalid Credentials');
        }
    }
);

export {register};