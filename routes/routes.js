const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const {getCities, getCityById, addCity, modifyCity, removeCity} = citiesControllers;
const itinerariesControllers = require('../controllers/itinerariesControllers');
const {getItineraries, getOneItinerary, getItinerariesFromOneCity,addItinerary, modifyItinerary, removeItinerary} = itinerariesControllers;
// Cities Routues
Router.route('/cities')
.get(getCities)
.post(addCity);

Router.route('/cities/:id')
.get(getCityById)
.put(modifyCity)
.delete(removeCity);

Router.route('/cities/:id/itineraries')
.get(getItinerariesFromOneCity);

//  Itineraries Routes
Router.route('/itineraries')
.get(getItineraries)
.post(addItinerary);

Router.route('/itineraries/:id')
.get(getOneItinerary)
.put(modifyItinerary)
.delete(removeItinerary);



module.exports = Router;