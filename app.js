console.log ('Probando Node !')

const http = require ('http'); //Entry point

http.createServer (function (req, res) { 

    res.writeHead (200, {"Content-type": "text/plain"})
    if (req.url == '/'){
        res.end ("Home")
    }

    if (req.url == "/en-cartelera") {
        res.end ('No te pierdas las últimas novedades')
    }

    if (req.url == "/mas-votadas") {
        res.end ('Tus favoritas estan acá !')
    }

    if (req.url == "/sucursales") {
        res.end ('¿En donde? Aca, obvio, en tus mejores ciness!')
    }

    if (req.url == "/contacto") {
        res.end ('Para estar mas cerca tuyo !')
    } 
    
    
    if (req.url == "/preguntas-frecuentes") {
        res.end ('Tus preguntas frecuentes')
    }


    res.end ("Mi primer servidor") //Mensaje que se envia





}).listen(3000, 'localhost')//Parametros => puerto y host