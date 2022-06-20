const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const {getCities, getOneCity, addCity, modifyCity, removeCity} = citiesControllers;
const itinerariesControllers = require('../controllers/itinerariesControllers');
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary, removeItinerary} = itinerariesControllers;
// Cities Routues
Router.route('/cities')
.get(getCities)
.post(addCity);

Router.route('/cities/:id')
.get(getOneCity)
.put(modifyCity)
.delete(removeCity);

//  Itineraries Routes
Router.route('/itineraries')
.get(getItineraries)
.post(addItinerary);

Router.route('/itineraries/:id')
.get(getOneItinerary)
.put(modifyItinerary)
.delete(removeItinerary);



module.exports = Router;