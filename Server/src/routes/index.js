const getCharById = require("../controllers/getCharById")
const login = require("../controllers/login")
const { postFav , deleteFav, getFav } = require("../controllers/handleFavorites")

const { Router } = require("express")
const routes = Router()

routes.get("/character/:id", getCharById)
routes.get("/login", login)
routes.get("/fav", getFav)
routes.post("/fav", postFav)
routes.delete("/fav/:id", deleteFav)

module.exports = routes