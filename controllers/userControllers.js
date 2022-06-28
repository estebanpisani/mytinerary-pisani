const User = require('../models/user');
const bcrypt = require('bcryptjs')

const userControllers = {
    signUp: async (req, res) => {
        let { firstName, lastName, userPhoto, email, password, country, method } = req.body;
        let userData = req.body;
        console.log(userData);
        try {
            const userDB = await User.findOne({ email });
            if (userDB) {
                if (userDB.method.indexOf(method) !== -1) {
                    res.json({
                        success: false,
                        from: 'signup',
                        message: 'You already used this registration method. Please sign in.'
                    })
                } else {
                    const encryptedPass = bcrypt.hashSync(password, 10);
                    userDB.method.push(method);
                    userDB.password.push(encryptedPass);
                    res.json({
                        success: true,
                        from: 'signup',
                        message: method + ' registration method successful.'
                    })
                }
            } else {
                const encryptedPass = bcrypt.hashSync(password, 10);
                const newUser = await new User({
                    firstName,
                    lastName,
                    userPhoto,
                    email,
                    password: [encryptedPass],
                    country,
                    method: [method]
                });
                await newUser.save();
                if (method !== 'register-form') {
                    res.json({
                        success: true,
                        from: 'signup',
                        message: 'Registration with ' + method + ' successful'
                    })
                }
                else {
                    res.json({
                        success: true,
                        from: 'signup',
                        message: 'We have sent you a verification email. Please check your inbox to activate your account.'
                    })
                }
            }
        } catch (err) {
            error = err;
            console.log(error);
            res.json({
                success: false,
                from: 'signup',
                message: 'Hubo un error. No sé vo fijate'
            })
        }
    },
    login: async (req, res) => {
        let { email, password } = req.body;
        console.log(req.body);
    },
    getUsers: async (req, res) => {
        let users;
        let error = null;
        try {
            users = await User.find();
        } catch (err) {
            error = err;
        }

        res.json(
            {
                response: error ? 'Error requesting users data' : { users },
                success: error ? false : true,
                error: error
            }
        )
    }
}

module.exports = userControllers;