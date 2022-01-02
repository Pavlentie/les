const Router = require("express")

const controller = require("./Controller/authController")

const router = new Router

router.post('/registration')
router.post('/login')
router.get('/users')

module.exports = router