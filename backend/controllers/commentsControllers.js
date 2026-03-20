const Itinerary = require('../models/itinerary');
const User = require('../models/user');

const commentsControllers = {

    like: async (req, res) => {
        const id = req.params.id;
        const { user } = req;
        const itinerary = await Itinerary.findOne({
            _id: id
        });
        if (itinerary) {
            if (itinerary.likes.indexOf(user.id) !== -1) {
                likesFiltered = itinerary.likes.filter(id => id !== user.id);
                itinerary.likes = likesFiltered;
                await itinerary.save();

                res.json({
                    success: true,
                    response: itinerary
                })
            } else {
                itinerary.likes.push(user.id);
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


    },
    addComment: async (req, res) => {
        const id = req.params.id;
        const { user } = req;
        const { comment } = req.body
        const itinerary = await Itinerary.findOne({
            _id: id
        });
        if (itinerary) {
            itinerary.comments.push(
                {
                    comment: comment,
                    user: user.id
                }
            );
            await itinerary.save();

            res.json({
                success: true,
                response: itinerary,
                message: "Thanks for comment!"
            })
        } else {
            res.json({
                success: false,
                message: 'Wrong action. Itinerary doesn\'t exists'
            })
        }
    },
    updateComment: async (req, res) => {
        const commentID = req.params.id;
        const commentBody = req.body.comment
        try {
            const newItinerary = await Itinerary.findOneAndUpdate({ "comments._id": commentID }, { $set: { "comments.$.comment": commentBody } }, { new: true })

            res.json({ success: true, response: { newItinerary }, message: "Commentary updated" })
        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Error updating commentary" })
        }

    },
    deleteComment: async (req, res) => {
        const commentID = req.params.id;
        try {
            const newItinerary = await Itinerary.findOneAndUpdate({ "comments._id": commentID }, { $pull: { comments: { _id: commentID } } }, { new: true })
            res.json(
                {
                    success: true,
                    response: { newItinerary },
                    message: "Commentary removed"
                }
            )

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Error removing commentary" })
        }
    }
}
module.exports = commentsControllers;