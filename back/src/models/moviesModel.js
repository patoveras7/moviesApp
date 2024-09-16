const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
title : {
    type: String,
    required: true
},
year : {
    type: Number,
    required: true
},
director : {
    type: String,
    required: true
},
duration : {
    type: String,
    required: true
},
genre : {
    type: Array,
    required: true
},
rate : {
    type: Number,
    required: true
},
poster : {
    type: String,
    required: true
}
});

const Movie = mongoose.model("Movie", movieSchema);// Aca los nombre del primer paramtero aportado y el de la constante deben SER IDENTICOS. 
module.exports = Movie; // Se exporta derecho al servicio que es quien va a llamar y a crear las peliclas interactuando con la BDD.