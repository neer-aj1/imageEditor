import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/tokenGeneration.js";

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
            res.status(201).json({
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

// login user
const login = asyncHandler(
    async (req, res) => {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        let matchedPasswords;
        try{
            matchedPasswords = await user.matchPassword(password);
        }
        catch(e){
            throw new Error("Invalid")
        }
        if(user && matchedPasswords){
            generateToken(res, user._id);
            res.status(201).json({
                name: user.fname,
                email: user.email,
            });
        }
        else{
            res.status(400);
            throw new Error("Invalid Credentials");
        }
    }
);

const logout = asyncHandler(
    async (req, res) => {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0),
        });
        res.status(200).json({
            message:'Logged out successfully'
        });
    }
);

const getUserProfile = asyncHandler (async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    }
    res.status(200).json(user);
});

export {register, login, logout, getUserProfile};