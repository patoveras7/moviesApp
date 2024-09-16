const express = require("express");//Requerimos express para poder crear el servidor.
const morgan = require("morgan");
const cors = require("cors");
const routerPrincipal = require("./routes/index.js");//Requerimos el router principal para poder redireccionar lo que entre por el index y luego pase aquí.

const app = express();//Nuestro servidor vive en esta variable app.

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(routerPrincipal);//Redireccionamos todo al router principal.


module.exports = app; 
