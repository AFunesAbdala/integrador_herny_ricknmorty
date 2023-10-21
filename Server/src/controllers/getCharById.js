const axios = require("axios");

const getCharById = (res, id) => {
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        const character = response.data

        return {
            id : Number(id),
            name : character.name,
            gender : character.gender,
            species : character.species,
            origin : character.origin.name,
            location : character.location.name,
            image : character.image,
            status : character.status
        }
    })
    .then((response) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response))
    })
    .catch((reason) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end(reason.message);

    })
};

module.exports = {
    getCharById
}