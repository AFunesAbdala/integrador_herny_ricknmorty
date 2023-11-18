const { all } = require("axios")
const { Favorite } = require("../DB_connection")

const deleteFav = async (req, res) => {
    const { id } = req.params

    try {
        await Favorite.destroy({ where : { id : id }})
        
        const allFavs = await Favorite.findAll()

        res.status(200).json(allFavs)
    } catch (error) {
        res.status(500).json({ message : error })
    }
}

module.exports = deleteFav