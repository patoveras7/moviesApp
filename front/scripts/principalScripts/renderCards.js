const moviesContainer = document.getElementById("moviesContainer");

const renderCards = (data) => {
    data.forEach((movie) => {

        const movieCard = document.createElement("div");//contenedor de la pelicula.
        const movieTitleAndYear = document.createElement("h1");
        const movieDirectionAndDuration = document.createElement("h2");
        const movieGenreAndRate = document.createElement("p");
        const moviePoster = document.createElement("img");//fondo del contenedor.
        const button1 = document.createElement("button");
        const button2 = document.createElement("button");
        const details = document.createElement("div");//detalles de la pelicula.

        movieTitleAndYear.textContent = `${movie.title} (${movie.year})`;
        movieDirectionAndDuration.textContent = `${movie.director} - ${movie.duration}`;
        movieGenreAndRate.textContent = `${movie.genre} - ${movie.rate}`;
        button1.textContent = "Trailer";
        button2.textContent = "Ver ahora";
        moviePoster.src = movie.poster;

        movieCard.classList.add("movieCard");//el contendor PADRE ya tiene su clase.
        movieTitleAndYear.classList.add("movieTitle");
        movieDirectionAndDuration.classList.add("direction");
        movieGenreAndRate.classList.add("genere");
        button1.classList.add("button1");
        button2.classList.add("button2");
        moviePoster.classList.add("poster");//damos clase a la hermana imagen.
        details.classList.add("details");//damos clase al hermano de detalles.

        details.appendChild(movieTitleAndYear);
        details.appendChild(movieDirectionAndDuration);
        details.appendChild(movieGenreAndRate);
        details.appendChild(button1);
        details.appendChild(button2);
        movieCard.appendChild(details);//los detalles son hijos del contenedor.
        movieCard.appendChild(moviePoster);//la imagen es hija del contenedor.

        moviesContainer.appendChild(movieCard);

    });
};

module.exports = renderCards;