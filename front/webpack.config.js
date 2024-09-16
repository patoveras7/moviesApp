module.exports = {
    entry: { index: "./scripts/principalScripts/index.js",
    addMovie: "./scripts/creationScripts/addMobies.js" //es el entrypoint es decir por donde se va a empezar a escanear.         
    },
    output: {
        path: __dirname + "/public", // es el nombre de la carpeta donde se va a almacenar.
        filename: "[name].bundle.js" // es el nombre del archivo que va a tener lo escaneado.
    }
}



