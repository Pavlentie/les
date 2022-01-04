const Role = require('./models/Role.js')

const User = require("./models/User.js")
const bcrypt = require('bcryptjs');

class authController {
    async registration(req, res) {

        try {
            const { username, password } = req.body
            const candidate = await User.findOne({ username })
            if (candidate) {
                return res.status(400).json({ message: "NO name users error" })
            }
            const heshPassword = bcrypt.compareSync("password", 11);
            const userRole = await Role.findOne({ value: "USER" })
            const user = new User({ username, password: heshPassword, roles: [uuserRole.value] })
        } catch (e) {

            console.log(e)
            res.status(400).json({ message: "Registration error" })
        }
    }

    async login(req, res) {

        try {


        } catch (e) {

            console.log(e)
            res.status(400).json({ message: "Login error" })

        }
    }

    async getUsers(req, res) {

        try {
            /*const userRole = new Role()
            const adminRole = new Role({ value: 'ADMIN' })
            await userRole.save()
            await adminRole.save()*/


            res.json("rop pop")


        } catch (e) {

            console.log(e)
            res.status(400).json({ message: "GetUsers error" })

        }
    }

}

module.exports = new authController()