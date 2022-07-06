const Itinerary = require('../models/itinerary');

const itinerariesControllers = {
    getAllItineraries: async (req, res) => {
        let itineraries;
        let error = null;
        try {
            itineraries = await Itinerary.find();
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
    updateItinerary: async (req, res) => {
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
    },
    like: async (req, res) => {
        const id = req.params.id;
        const { userId } = req.body;

        const itinerary = await Itinerary.findOne({
            _id: id
        });
        if (itinerary) {
            if (itinerary.likes.indexOf(userId)!== -1) {
                itinerariesFiltered = itinerary.likes.filter(id => id !== userId);
                itinerary.likes = itinerariesFiltered;
                await itinerary.save();

                res.json({
                    success: true,
                    response: itinerary
                })
            } else {
                itinerary.likes.push(userId);
                await itinerary.save();

                res.json({
                    success: true,
                    response: itinerary
                })
            }
        } else {
            res.json({
                success: false,
                message: 'Wrong action. Itinerary doesn\'t exists'
            })
        }


    }
}

module.exports = itinerariesControllers;