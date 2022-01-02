const express = require("express")

const mongoose = reguire("mongoose")

const authRouter = require("./Router/authRouter")

const PORT = process.env.PORT || 5000

const app = express()

app.use('\auth', authRouter)
app.use(express.json())
const start = async() => {
    try {
        await mongoose.connect("mongodb+srv://pavlentos:port5000@cluster0.8rlkc.mongodb.net/auth_roles?retryWrites=true&w=majority")
        app.listen(PORT, () => console.log("server started on port "))

    } catch (e) {

        console.log(e)
    }
}
start()