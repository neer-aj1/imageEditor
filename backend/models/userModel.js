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


// checking if the password is chenged or not before saying during the update
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) {next();}

    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password ,salt);
})

userSchema.method.matchPassword = async (passwordEnterd) => {
    return  await bcrypt.compare(this.password, passwordEnterd) ;   //comparing the hashed and plain text passwords
}

const User = mongoose.model('User', userSchema);

export default User;