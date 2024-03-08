const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:String,
        course:String,
        dob:String,
        session:String,
        age:Number,
        mobile:String,
        email:String,
        password:String,
        address:String
}

)

exports.User = mongoose.model('user', userSchema)