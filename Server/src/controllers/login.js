const user = require("../utils/users");

const login = (req, res) => {
    const { email, password } = req.query

    const validUser = user.find((u) => u.email === email && u.password === password) 

    if (!validUser) res.status(200).json({ access: false })

    res.status(200).json({ access : true })
}

module.exports = login