// 

const mongoose = require('mongoose');

const connectDB = () => {

    mongoose.connect('mongodb+srv://harsh30032003:harsh123@cluster0.cexzfqj.mongodb.net/sms?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log('Connected!'));

}

module.exports = connectDB