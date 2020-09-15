const bcrypt = require('bcrypt');
const {
    registerUser
} = require('../queries/queries');

const saltRounds = 10;

module.exports = {
    checkPassword: async (hash, userPassword)=>{
        const match =  await bcrypt.compare(userPassword, hash);
        return match
    }
}