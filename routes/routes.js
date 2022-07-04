const Router = require('express').Router();
const validatorSignUp = require('../config/validatorSignUp');
const validatorLogin = require('../config/validatorLogin');
const passport = require('../config/passport');

const citiesControllers = require('../controllers/citiesControllers');
const itinerariesControllers = require('../controllers/itinerariesControllers');
const userControllers = require('../controllers/userControllers');
const activitiesControllers = require('../controllers/activitiesControllers');

const {getCities, getCityById, addCity, modifyCity, removeCity} = citiesControllers;
const {getAllActivities, getActivitiesByItinerary, addActivity, updateActivity, removeActivity} = activitiesControllers;
const {getAllItineraries, getItineraryById, getItinerariesByCity,addItinerary, updateItinerary, removeItinerary} = itinerariesControllers;
const { signUp, login, getUsers, deleteUser, verifyEmail, verifyToken } = userControllers;

// Cities Routes
Router.route('/cities')
.get(getCities)
.post(addCity);

Router.route('/cities/:id')
.get(getCityById)
.put(modifyCity)
.delete(removeCity);

Router.route('/cities/:id/itineraries')
.get(getItinerariesByCity);

//  Itineraries Routes
Router.route('/itineraries')
.get(getAllItineraries)
.post(addItinerary);

Router.route('/itineraries/:id')
.get(getItineraryById)
.put(updateItinerary)
.delete(removeItinerary);

Router.route('/itineraries/:id/activities')
.get(getActivitiesByItinerary);

//  Activities Routes
Router.route('/activities')
.get(getAllActivities)
.post(addActivity);

Router.route('/activities/:id')
.put(updateActivity)
.delete(removeActivity);

// User Routes
Router.route('/auth/signup')
.post(validatorSignUp, signUp);

Router.route('/auth/login')
.post(validatorLogin, login);

Router.route('/auth')
.get(passport.authenticate('jwt', { session: false }), verifyToken);

Router.route('/auth/users')
.get(getUsers);

Router.route('/auth/users/:id')
.delete(deleteUser);

Router.route('/auth/verify/:uniqueString')
.get(verifyEmail);

module.exports = Router;