const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema(
    {
        title:{ type:String, require:true },
        description: {type:String, require:false},
        itinerary: {type: mongoose.Types.ObjectId, ref:'itineraries'}
    }
)

const Activity = mongoose.model('activities', activitySchema);

module.exports = Activity;