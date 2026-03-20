const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{

    useUnifiedTopology: true,
    useNewUrlParser: true,

})
.then(()=>console.log("DataBase connected."))
.catch(err => console.log(err));