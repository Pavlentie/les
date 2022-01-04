const { Schema, model, Mongoose } = require('mongoose')

const Role = new Schema({
    value: { type: String, unique: true, default: "USER" },
})

module.exports = model('Role', Role)