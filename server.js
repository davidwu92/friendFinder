const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let friends = [
  {name:"Ahmed",
  photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores:[5,1,4,4,5,1,2,5,4,1]
  }
]

app.post('/newFriend', (req, res)=>{
  console.log(req.body)
  friends.push(req.body)
})

app.get('/getFriends', (req, res)=>{
  res.send(friends)
})


app.listen(3000, ()=>{console.log("Server is listening")})