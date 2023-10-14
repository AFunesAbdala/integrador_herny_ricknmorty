const http = require('http');
const data = require('./utils/data');
const { url } = require('inspector');

const PORT = 3001;

http.createServer((req, res)=>{

    console.log(`El servidor está escuchando en el puerto ${PORT}`);
    console.log(req.url)

    res.setHeader('Access-Control-Allow-Origin', '*');    

    if (req.url.startsWith('/rickandmorty/character/')) {
        
        const id = req.url.split('/').pop();

        const character = data.find((character) => character.id === Number(id));
        if (character) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(character));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Personaje no encontrado' }));
        }
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'Ruta no encontrada' }));

 }).listen(PORT, 'localhost');