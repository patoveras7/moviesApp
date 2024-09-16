const {getMovies, addMovie} = require('../services/moviesService');


    
    exports.getAllMovies = async (req, res) => {
        try{
        const movies = await getMovies(); // Aca el await si lo toma porque NO SE SABE que va a retornar getMovies.    
        res.status(200).json(movies);
        }catch(error){
         res.status(500).json({
            error : "Ha ocurrido un error inesperado."
         })       
        }
    }

    exports.addNewMovie = async (req, res) => {
      try {
        const {title, year, director, duration, genre, rate, poster} = req.body;
        const final = await addMovie({title, year, director, duration, genre, rate, poster});
        return res.status(201).json({
          message: "Pelicula agregada con exito.",
          final,
        })
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }  

    // exports.putMovies = async (req, res) =>{
    //   return res.status(200).send("Peluclas proximadamente.")   
    // }