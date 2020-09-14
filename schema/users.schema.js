const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {type: String, required: true },
    password: {type: String, required: true },
    isLogin: {type: Boolean, default: false},
    status: {type: String, default: 'Trainer'}
})

mongoose.model("Users", UserSchema);