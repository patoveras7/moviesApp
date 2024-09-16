const {Router} = require('express');//LINEA 1 de router, requerimiento.
const moviesController = require('../controllers/moviesController');//Requerimos el controlador de movies para que el enrutador de movies le pueda pasar la solicitud.
const moviesRouter = Router();//LINEA 2 de router, creacion de instancia.

moviesRouter.get('/', moviesController.getAllMovies);

moviesRouter.post('/', moviesController.addNewMovie);


module.exports = moviesRouter;
