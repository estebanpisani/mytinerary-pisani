const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const {getCities, getCityById, addCity, modifyCity, removeCity} = citiesControllers;
const itinerariesControllers = require('../controllers/itinerariesControllers');
const {getItineraries, getItineraryById, getItinerariesByCity,addItinerary, modifyItinerary, removeItinerary} = itinerariesControllers;
const userControllers = require('../controllers/userControllers');
const { signUp, login, getUsers, deleteUser } = userControllers;

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
.get(getItineraries)
.post(addItinerary);

Router.route('/itineraries/:id')
.get(getItineraryById)
.put(modifyItinerary)
.delete(removeItinerary);

// User Routes
Router.route('/auth/signup')
.post(signUp);

Router.route('/auth/login')
.post(login);

Router.route('/auth/users')
.get(getUsers);

Router.route('/auth/users/:id')
.delete(deleteUser);

module.exports = Router;