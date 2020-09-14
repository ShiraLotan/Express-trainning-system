const bcrypt = require('bcrypt');
const {
    registerUser
} = require('../queries/queries');

const saltRounds = 10;

module.exports = {
    hassPassword: async({
        password,
        ...rest
    }) => {
       bcrypt.hash(password, saltRounds, async function(err, hash) {
            if (!err) {
                const hashedPass = {
                    password: hash
                };
                const fullObj = {
                    ...rest,
                    ...hashedPass
                };
                const response = await registerUser(fullObj);
            }
            return hash
        });
    },

    checkPassword: (hash)=>{

    }
}