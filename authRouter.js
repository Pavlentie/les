const Router = require("express")
const controller = require("./authController")
const { check } = require("express-validator")
const router = new Router
const authMiddleware = require("./Middleware/AuthMiddleware")
const roleMiddleware = require("./Middleware/roleMiddleware")
router.post(
    'registration', [
        check('username', "User name not hert ").notEmpty(),
        check('password', "paswoord min 4 max 10").isLength({ min:4, max:10 })

    ], controller.registration)

router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)

module.exports = router