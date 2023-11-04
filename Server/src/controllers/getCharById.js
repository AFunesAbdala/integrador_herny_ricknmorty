const axios = require("axios");

const getCharById = async function (req, res) {

    const { id } = req.params
    const URL = `https://rickandmortyapi.com/api/character/${id}`;
    
    try {
        const response = await axios.get(URL)
        const character = response.data

        if (!character) {
            res.status(400).json({ message : "Not found"})
            return
        }

        const responseData = {
            id : Number(id),
            name : character.name,
            gender : character.gender,
            species : character.species,
            origin : character.origin.name,
            location : character.location.name,
            image : character.image,
            status : character.status
        }

        res.status(200).json(responseData)

    } catch (error) {
        res.status(500).json({ message: error })
    }

    /* axios
    .get(URL)
    .then((response) => {
        const character = response.data
        
        if (!character) res.status(400).json({ message : "Not found"})

        const responseData = {
            id : Number(id),
            name : character.name,
            gender : character.gender,
            species : character.species,
            origin : character.origin.name,
            location : character.location.name,
            image : character.image,
            status : character.status
        }
        res.status(200).json(responseData)

    })
    .catch((reason) => {
        res.status(500).json({ message: reason })
    }) */
};

module.exports = getCharById