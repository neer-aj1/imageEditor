import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

//user schema
const userSchema = mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
    email:{
        type:String, 
        unique:true, 
        required:true,
    },
    password:{
        type: String,
        required: true
    },
},{timestamps: true});


// checking if the password is changed or not before saving during the update
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) {
        return next();
    }
    this.password= await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.matchPassword = async function(passwordEnterd){
    return await bcrypt.compare(passwordEnterd, this.password) ;   //comparing the hashed and plain text passwords
}

const User = mongoose.model('User', userSchema);

export default User;