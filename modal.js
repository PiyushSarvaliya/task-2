const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    image: String,
    status : {type : Boolean , default : true},
    created_date : {type : String , default : Date.now},
    updated_date : {type : String , default : Date.now}
})

const User = mongoose.model("task" , schema)

module.exports = User