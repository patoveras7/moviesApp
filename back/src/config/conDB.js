require('dotenv').config();//dotenv va a ir a .env va a leer las variables y las va a dejar a dispocisión del proyecto.
const mongoose = require("mongoose"); // El mismo mongoose que requerimos en los otros modulos aca lo conectamos a la base de datos. Siendo la funcion llamada en el entripoint.

const MONGO_URI = process.env.MONGO_URI;
const conDB = async () => {
    try{
    await mongoose.connect(MONGO_URI);
    console.log("Base de datos conectada");
}
    catch(error){
        error.message;
        console.log("Ha ocurrido un error al conectar a la base de datos", error);
    }

}
module.exports = conDB;

//Consignamos un try catch aca para que en caso de que haya algun error con la conexion a base de datos me lo maneje aca
