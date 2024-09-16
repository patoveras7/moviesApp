const {Router} = require('express');//LINEA 1 de router, requerimiento.
const moviesRouter = require('./moviesRouter');//Requerimos el router de la entidad movies para que el enrutador principal lo pueda usar.
const routerPrincipal = Router();//LINEA 2 de router, creacion de instancia.

routerPrincipal.use('/movies', moviesRouter);//Inyectamos la ruta secundaria movies al router principal.

module.exports = routerPrincipal;