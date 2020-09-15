const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {type: String, required: true },
    password: {type: String, required: true },
    isSignin: {type: Boolean, default: false},
    status: {type: String, default: 'Trainer'}
})


UserSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    }catch(err){
        next(err)
    }
})

mongoose.model("Users", UserSchema);