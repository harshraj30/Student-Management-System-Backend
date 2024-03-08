const express = require('express')
const connectDB = require('./config/db')
const { User } = require('./model/User')
const app = express()
const cors = require('cors')
const { log } = require('console')
const bodyParser = require('body-parser')


connectDB()



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/user/add', function (req, res) {
  
  const user = new User();
  
  user.name = "Harsh Raj"
  user.course = "MCA"
  user.dob = "30-03-2003"
  user.session = "2023-2025"
  user.age = "23"
  user.mobile = "9060532886"
  user.email = "harsh30032003@gmail.com"
  user.password = "Harsh@123"
  user.address = "Sipahi tola Purnea"
  
  // user.save()
  
  res.send(user)
})


app.get('/users', async function (req, res) {
    const users = await User.find();

    return res.send(users)
})

app.get('/users/:id', async function (req, res) {
    const users = await User.find({mobile:req.params.id});

    return res.send(users)
})

app.post('/login' , async function(req, res) {

  const user = await User.find({email:req.body.email})

  const data = {
    userData: "",
    msg:"",
    status:""
  }

  if(user.length > 0){
    if(user[0].password == req.body.password){
      data.userData = user
      data.status = "success"
      data.msg = "login"
      res.send(data)
    }
    else{
      data.status= "fail"
      data.msg = "invalid password"
      res.send(data)
    }
  }
  else{
    data.status= "fail"
    data.msg = "no user found"
    res.send(data)
  }
})


app.listen(8000)
