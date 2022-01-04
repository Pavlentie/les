const express = require("express")

const mongoose = require("mongoose")

const authRouter = require("./authRouter")


const PORT = process.env.PORT || 5000

const app = express()

app.use('/auth', authRouter)
app.use(express.json())
const start = async() => {
    try {
        await mongoose.connect("mongodb+srv://pavlentie:fortuna156@cluster0.opy0p.mongodb.net/auth_roles?retryWrites=true&w=majority")
        app.listen(PORT, () => console.log("server started on port "))
        console.log(PORT)

    } catch (e) {

        console.log(e)
    }
}
start()