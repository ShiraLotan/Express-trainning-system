const mongoose = require('mongoose');
const UserSchema = mongoose.model('Users');


module.exports = {

    loginUser: async ({
        email,
        password
    }) => {
        try {
            const response = await UserSchema.findOne({
                email,
                password
            });
            if (response) {
                await UserSchema.updateOne({
                    email
                }, {
                    $set: {
                        isLogin: true
                    }
                })
                return {
                    message: 'LOGIN'
                }
            } else {
                return {
                    message: 'Not a match'
                };
            }
        } catch (err) {
            return {
                message: err.message
            }
        }
    }
}
 

