const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema(
    {
        title:{ type:String, require:true },
        userName: { type:String, require:true },
        userPhoto: { type:String, require:false},
        price:{type:Number, require:true},
        duration: { type:Number, require:true},
        description: {type:String, require:false},
        tags: {type:Array, require:false},
        likes: {type:Number, require:false},
        city: {type: mongoose.Types.ObjectId, ref:'cities'}
    }
)

const Itinerary = mongoose.model('itineraries', itinerarySchema);

module.exports = Itinerary;