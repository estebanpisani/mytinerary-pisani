const User = require('../models/user');
const bcrypt = require('bcryptjs')

const userControllers = {
    signUp: async (req, res) => {
        let { firstName, lastName, userPhoto, email, password, birthdate, country, from } = req.body;
        let error = null;
        try {
            const userDB = await User.find({ email });

            if (userDB) {
                if (userDB.from.indexOf(from) !== -1) {
                    res.json({
                        success: false,
                        from: 'signup',
                        message: 'You already used this registration method. Please sign in.'
                    })
                } else {
                    const encryptedPass = bcrypt.hashSync(password, 10);
                    userDB.from.push(from);
                    userDB.password.push(encryptedPass);
                    res.json({
                        success: true,
                        from: 'signup',
                        message: from + ' registration method successful.'
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
                    birthdate,
                    country,
                    from: [from]
                });
                await newUser.save();
                if (from !== 'register-form') {
                    res.json({
                        success: true,
                        from: 'signup',
                        message: 'Registration with ' + from + ' successful'
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
        }

        res.json(
            {
                response: error ? 'Error requesting itineraries data' : { itineraries },
                success: error ? false : true,
                error: error
            }
        )
    },
    getItineraryById: async (req, res) => {
        const id = req.params.id;
        let itinerary;
        let error = null;
        try {
            itinerary = await Itinerary.findOne({ _id: id });
        } catch (err) {
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error requesting itinerary data' : { itinerary },
                success: error ? false : true,
                error: error
            }
        )
    },
    getItinerariesByCity: async (req, res) => {
        const id = req.params.id;
        let error = null;
        let itineraries = [];
        try {
            itineraries = await Itinerary.find({ city: id })
        } catch (err) {
            error = err;
            console.log(error);
        }
        res.json({
            response: error ? 'Error requesting itineraries data' : itineraries,
            success: error ? false : true,
            error: error
        })
    },
    addItinerary: async (req, res) => {
        const { title, userName, userPhoto, price, duration, tags, likes, activities, city } = req.body
        let itinerary;
        let error = null;
        try {
            itinerary = await new Itinerary({
                title: title,
                userName: userName,
                userPhoto: userPhoto,
                price: price,
                duration: duration,
                tags: tags,
                likes: likes,
                activities: activities,
                city: city
            }).save();
        } catch (err) {
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error creating itinerary' : itinerary,
                success: error ? false : true,
                error: error
            }
        )
    },
    modifyItinerary: async (req, res) => {
        const id = req.params.id;
        console.log(id);
        let itineraryReq = req.body;
        console.log(itineraryReq);
        let itineraryDB;
        let error = null;
        try {
            itineraryDB = await Itinerary.findOneAndUpdate({ _id: id }, itineraryReq, { new: true });
        } catch (err) {
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error updating itinerary' : itineraryDB,
                success: error ? false : true,
                error: error
            }
        )
    },
    removeItinerary: async (req, res) => {
        const id = req.params.id;
        let itinerary;
        let error = null;
        try {
            itinerary = await Itinerary.findOneAndDelete({ _id: id });
        } catch (err) {
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error removing itinerary' : itinerary,
                success: error ? false : true,
                error: error
            }
        )
    }
}

module.exports = itinerariesControllers;