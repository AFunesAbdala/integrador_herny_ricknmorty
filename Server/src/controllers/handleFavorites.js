let myFavorites = []

const getFav = (req, res) => {
    res.status(200).json(myFavorites)
}

const postFav = (req, res) => {
    const newFavorite = req.body;

    myFavorites.push(newFavorite)

    res.status(200).json(myFavorites)

}

const deleteFav = (req, res) => {
    const { id } = req.params

    myFavorites = myFavorites.filter((e) => e.id !== Number(id))

    res.status(200).json(myFavorites)

}

module.exports = {
    postFav,
    deleteFav,
    getFav
}
