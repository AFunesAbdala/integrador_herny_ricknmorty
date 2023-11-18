const { Favorite } = require("../DB_connection")

const postFav = async (req, res) => {
    const {
        id,
        name,
        origin,
        location,
        status,
        image,
        species,
        gender
    } = req.body

    if (!id || !name || !origin || !status || !image || !species || !gender) {
        res.status(401).json({ message : "Faltan datos"})  
        return      
    }

    try {
        await Favorite.create({
            id,
            name,
            origin,
            location,
            status,
            image,
            species,
            gender
        })

        const allFavs = await Favorite.findAll()

        res.status(200).json(allFavs)

    } catch (error) {
        res.status(500).json({ message : error })
    }
}

module.exports = postFav