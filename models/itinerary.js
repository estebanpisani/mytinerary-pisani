const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema(
    {
        title:{ type:String, require:true },
        userName: { type:String, require:true },
        userPhoto: { type:String, require:true},
        price:{type:Number, require:true},
        duration: { type:Number, require:true},
        tags: {type:String, require:false},
        likes: {type:Number, require:true},
        activities: {type:String, require:false}
    }
)

const Itinerary = mongoose.model('itineraries', itinerarySchema);

module.exports = Itinerary;