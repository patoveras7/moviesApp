import { addMovie } from "./addMobies.js";

export const form = document.getElementById("movieForm");
export const vaciar = document.getElementById("vaciar");

export const handleSubmit = (event) => {// Generalmente aca se pone click, de hecho si se caputa directamente el boton y se pone click FUNCIONA
    //pero si se lo captura y se pone SUBMIT no funciona. Lo idean es poner submit para que no haya problema con el button de vaciado entonces hay que 
    //capturar todo el formulario para que funcione (no el boton de enviar).
    event.preventDefault(); // Es importante cada vez que tenemos una funcion que realiza un submit para que no se recargue la pagina (comportamiento por defecto).
    
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genre = Array.from(document.getElementById("genre").selectedOptions).map((option) => option.value);
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        console.log("Todos los campos son obligatorios");
        document.getElementById("movieForm").reset();
        return alert("Todos los campos son obligatorios");
    }
    
    //console.log(document.getElementById("genre").selectedOptions);//Devuelve las opciones eleccionadas en HTML colection que si bien es muy parecido a un ARREGLO
    //no lo es, nos trae muchisima informacion y en alguna parte de esa información esta la selección del cliente (en algun lado esta el "value"). De hecho hay metodos de la clase Array que se le van
    //a poder aplicar y hay metodos que no. Hay que transformarlo primero en un array para poder trabajarlo.  


    
const generosVarios = Array.from(document.getElementById("genre").selectedOptions).map((option) => option.value); // Quiero que a partir de algo que yo
//le paso me confeccione un array, pero como lo que yo le estoy pasando no son las selecciones del cliente solamente sino que paso varias opciones con mucha informacion
//en su interior (dentro de las cuales se encuentra la propiedad Value donde esta la selección del cliente), cada elemento del arreglo que me confeccione va a ser un objeto donde esta
//dicha informacion entonces hay que mapear ese arreglo que me devuelve para que por cada una de esas opciones me devuelva el valor de esa opcion. NOTA PARTE: Cuando
//mapeamos si tipeamos lo que queremos que devuelva entre llaves, hay que poner el return {return genero.value}, sin el return la llaves no van.

//console.log(generosVarios);



    const movie = {
        title: document.getElementById("title").value,//Si no escribimos value lo que va a hacer es capturar el mismo input y lo que queremos es capturar lo que escribe el cliente dentro del input.
        year: document.getElementById("year").value,
        director: document.getElementById("director").value,
        duration: document.getElementById("duration").value,
        genre: generosVarios,
        rate: document.getElementById("rate").value,
        poster: document.getElementById("poster").value
    
     };

 addMovie(movie);    

};

export const handleVaciar = ()=>{
    document.getElementById("movieForm").reset();
};
