const Role = require('./models/Role.js')
const jwt = require('jsonwebtoken');
const User = require("./models/User.js")
const bcrypt = require('bcryptjs');
const {secret} = require("./config.js")


const { validationResult } = require('express-validator')

const generateAccessToken = (id, roles)=> {

    const payload ={
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn:`24h`})

}


class authController {
    async registration(req, res) {

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ massage: "Errors registration" })
            }
            const { username, password } = req.body
            const candidate = await User.findOne({ username })
            if (candidate) {
                return res.status(400).json({ message: "NO name users error" })
            }
            const heshPassword = bcrypt.compareSync("password", 11);
            const userRole = await Role.findOne({ value: "ADMIN" })
            const user = new User({ username, password: heshPassword, roles: [uuserRole.value] })
            await user.save()
            return res.json({ message: 'ok regist' })

        } catch (e) {

            console.log(e)
            res.status(400).json({ message: "Registration error" })
        }
    }

    async login(req, res) {

        try {
            const { username, password } = req.body
            const user = await User.findOne({username})
            if (!user){
                return res.status(400).json( { message: `User ${username}  ytyfq`})

            }
            if (!validPassword){
                return  res.status(400).json({message:'errors password'})
            }
            const token = generateAccessToken(user._id,user.roles );
            return res.json ({token})
        } catch (e) {

            console.log(e)
            res.status(400).json({ message: "Login error" })

        }
    }

    async getUsers(req, res) {

        try {
            const users = await User.find()

            /*const userRole = new Role()
            const adminRole = new Role({ value: 'ADMIN' })
            await userRole.save()
            await adminRole.save()*/


            res.json(users)


        } catch (e) {

            console.log(e)
            res.status(400).json({ message: "GetUsers error" })

        }
    }

}

module.exports = new authController()