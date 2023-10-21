const http = require('http');
const { getCharById } = require('./controllers/getCharById');

const PORT = 3001;

http.createServer((req, res)=>{

    console.log(`El servidor está escuchando en el puerto ${PORT}`);

    res.setHeader('Access-Control-Allow-Origin', '*');    

    if (req.url.includes('/rickandmorty/character/')) {
        const id = req.url.split('/').pop();
        getCharById(res, id);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Ruta no encontrada' }));
    }

    

 }).listen(PORT, 'localhost');