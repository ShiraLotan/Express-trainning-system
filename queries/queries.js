const mongoose = require('mongoose');
const {
    checkPassword
} = require('../security/password.secure');

const UserSchema = mongoose.model('Users');
const HeroSchema = mongoose.model('Heros');


module.exports = {

    loginUser: async ({
        email,
        password
    }) => {
        try {
            const response = await UserSchema.findOne({
                email
            }, {
                password: 1
            });
            const plainPass = await checkPassword(response.password, password);
            if (plainPass) {
                updateLogin(email)
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
    },

    registerUser: async ({
        name,
        email,
        password
    }) => {
        try {
            const response = await UserSchema.findOne({
                email: email
            });
            if (response) {
                return {
                    message: 'Already exist'
                }
            } else {
                const user = new UserSchema({
                    name,
                    email,
                    password
                });
                user.save((err, data) => {
                    if (!err) {
                        updateLogin(email);
                    }
                });
                return user
            }
        } catch (err) {
            return {
                message: err.message
            }
        }
    },

    getAllTrainers: async () => {
        const response = await UserSchema.find();
        return response
    },

    addHero: (details, trainerId) => {
        details.guid_id = trainerId._id
        const hero = new HeroSchema(details);
        hero.save();
        return hero
    },

    findTrainerIdByMail: async (email) => {
        const response = await UserSchema.findOne({
            email
        }, {
            _id: 1
        });
        return response
    },

    getHerosByTainerId: async ({
        _id
    }) => {
        const res = await HeroSchema.find({
            guid_id: _id
        }).sort({
            power_current: 1
        })
        return res
    }
}

const updateLogin = async (email) => {
    await UserSchema.updateOne({
        email
    }, {
        $set: {
            isSignin: true
        }
    })
}