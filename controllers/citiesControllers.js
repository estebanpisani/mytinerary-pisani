const City = require('../models/city');

const citiesControllers = {
    getCities: async (req,res) => {
        let cities;
        let error = null;
        try {
            cities = await City.find();
        }catch (err){
            error = err;
        }

        res.json(
            {
                response: error ? 'Error al solicitar ciudades' : {cities},
                success: error ? false : true,
                error: error
            }
        )
    },
    getOneCity: async (req,res) => {
        const id = req.params.id;
        let city;
        let error = null;
        try {
            city = await City.findOne({_id:id});
        }catch (err){
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error al solicitar ciudad' : {city},
                success: error ? false : true,
                error: error
            }
        )
    },
    addCity: async (req,res) => {
        const {name, country, description, image}=req.body
        let city;
        let error = null;
        try {
            city = await new City({
                name: name,
                country: country,
                description: description,
                image: image
            }).save();
        }catch (err){
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error al crear ciudad' : city,
                success: error ? false : true,
                error: error
            }
        )
    },
    modifyCity: async (req,res) => {
        const id = req.params.id;
        console.log(id);
        let cityReq = req.body;
        console.log(cityReq);
        let cityDB;
        let error = null;
        try {
            cityDB = await City.findOneAndUpdate({ _id:id }, cityReq, {new:true});
        }catch (err){
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error al modificar datos de ciudad' : cityDB,
                success: error ? false : true,
                error: error
            }
        )
    },
    removeCity: async (req,res) => {
        const id = req.params.id;
        let city;
        let error = null;
        try {
            city = await City.findOneAndDelete({_id:id});
        }catch (err){
            error = err;
            console.log(error);
        }

        res.json(
            {
                response: error ? 'Error al eliminar ciudad' : city,
                success: error ? false : true,
                error: error
            }
        )
    }
}

module.exports = citiesControllers;