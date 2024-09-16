const renderCards = require("./renderCards")
const axios = require("axios");

const getAllMovies = async () => {
try {   
const movies = await axios.get("http://localhost:3000/movies");
renderCards(movies.data);
} catch (error) {
    alert(error);
    console.log(error);
}};

getAllMovies();
