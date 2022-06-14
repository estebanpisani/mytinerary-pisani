const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const {getCities, getOneCity, addCity, modifyCity, removeCity} = citiesControllers;

Router.route('/cities')
.get(getCities)
.post(addCity);

Router.route('/cities/:id')
.get(getOneCity)
.put(modifyCity)
.delete(removeCity);

module.exports = Router;