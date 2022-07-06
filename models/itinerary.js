const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema(
    {
        title: { type: String, require: true },
        userName: { type: String, require: true },
        userPhoto: { type: String, require: false },
        price: { type: Number, require: true },
        duration: { type: Number, require: true },
        description: { type: String, require: false },
        tags: { type: Array, require: false },
        likes: [{ type:String, require: false }],
        comments: [{
            comment: { type: String },
            userId: { type: mongoose.Types.ObjectId, ref: 'users' }
            }],
        city: { type: mongoose.Types.ObjectId, ref: 'cities' },
        
    }
)
// Otra manera de relacionar activities:
// activities: [{type: mongoose.Types.ObjectId, ref: 'activities'}]
const Itinerary = mongoose.model('itineraries', itinerarySchema);

module.exports = Itinerary;