const axios = require('axios')

export const addMovie = async (movie) =>{
    try{
    const newMovie = await axios.post("http://localhost:3000/movies", movie);
    console.log("Successful creation"); // Las respuestas de las request se ven por consola. Una vez que trabajan el controlador y el servicio se muestra directamente por consola/terminal.
    alert(newMovie.data.message);
    } catch (error){
    alert("Hubo un error: ", error.message);
    }
}

import { form, vaciar, handleSubmit, handleVaciar } from './createMobies.js';


form.addEventListener('submit', handleSubmit);
vaciar.addEventListener('click', handleVaciar);

