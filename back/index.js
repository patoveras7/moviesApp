//Este es nuestro interruptor de encendido.
require('dotenv').config();//dotenv va a ir a .env va a leer las variables y las va a dejar a dispocisión del proyecto.
const app = require("./src/server");//Requerimos al servidor para levantarlo desde aquí mismo.
const conDB = require("./src/config/conDB");//Importamos la función de conexion a la base de datos.

const PORT = process.env.PORT || 3001;

try{
    app.listen(PORT, async () => {
        await conDB();
        console.log("Servidor escuchando en el puerto 3000.");
    });
} catch (error) {
    error.message;
    console.log("Ha ocurrido un error en el servidor", error);
};




