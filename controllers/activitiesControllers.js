const Activity = require('../models/activity');

const activitiesControllers = {
    getAllActivities: async (req,res) => {
        let activities;
        let error = null;
        try {
            activities = await Activity.find();
        }catch (err){
            error = err;
        }
        res.json(
            {
                response: error ? 'Error requesting activities data' : {activities},
                success: error ? false : true,
                error: error
            }
        )
    },
    getActivitiesByItinerary: async (req,res) => {
        const id = req.params.id;
        let error = null;
        let activities = [];
        try{
            activities = await Activity.find({itinerary:id})
        } catch(err){
            error = err;
            console.log(error);
        }
        res.json({
            response: error ? 'Error requesting activities data' : activities,
            success: error ? false : true,
            error: error
        })
    },
    addActivity: async (req,res) => {
        const {title, picture, description, itinerary}=req.body
        let activity;
        let error = null;
        try {
            activity = await new Activity({
                title: title,
                picture: picture,
                description: description,
                itinerary: itinerary
            }).save();
        }catch (err){
            error = err;
            console.log(error);
        }
        res.json(
            {
                response: error ? 'Error creating activity' : activity,
                success: error ? false : true,
                error: error
            }
        )
    },
    updateActivity: async (req,res) => {
        const id = req.params.id;
        console.log(id);
        let activityReq = req.body;
        console.log(activityReq);
        let activityDB;
        let error = null;
        try {
            activityDB = await Activity.findOneAndUpdate({ _id:id }, activityReq, {new:true});
        }catch (err){
            error = err;
            console.log(error);
        }
        res.json(
            {
                response: error ? 'Error updating activity' : activityDB,
                success: error ? false : true,
                error: error
            }
        )
    },
    removeActivity: async (req,res) => {
        const id = req.params.id;
        let activityDB;
        let error = null;
        try {
            activityDB = await Activity.findOneAndDelete({_id:id});
        }catch (err){
            error = err;
            console.log(error);
        }
        res.json(
            {
                response: error ? 'Error removing activity' : activityDB,
                success: error ? false : true,
                error: error
            }
        )
    }
}

module.exports = activitiesControllers;