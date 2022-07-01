const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName:{ type:String, require:true },
        lastName: { type:String, require:true },
        email:{type:String, require:true},
        password: [{type:String, require:true}],
        method: {type:Array, require: true},
        userPhoto: { type:String, require:false},
        country: {type:String, require:true},
        verified: {type:Boolean, require:true},
        uniqueString: {type:String, require:true}
    }
)

const User = mongoose.model('users', userSchema);

module.exports = User;