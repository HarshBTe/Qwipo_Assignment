const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
     FirstName: String,
     LastName: String,
     PhoneNo: Number,
     Email: String,
     Address: String
})

const UserModel = mongoose.model("customers", UserSchema)
module.exports = UserModel