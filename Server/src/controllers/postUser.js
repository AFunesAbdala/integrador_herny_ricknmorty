const { User } = require("../DB_connection")

const postUser = async (req, res) => {
    const {email, password} = req.body

    try {
        if(!email || !password) {
            res.status(400).json({ message : "Faltan datos"})
            return
        }

        const [user, created] = await User.findOrCreate({ 
            where: { email: email },
            defaults: {
                email: email,
                password : password
              }
        });
        
        if (created) {
            res.status(200).json({ message : "Usuario creado con exito"})
            return
        } else {
            res.status(400).json({ message : "El usuario ya existe"})
            return
        }
    } catch (error) {
        res.status(500).json({ message : error})
    }
}

module.exports = postUser