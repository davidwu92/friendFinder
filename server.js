const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let friends = [
  {name:"Samurai Jack",
  photo: "http://media.comicbook.com/2017/10/36190303uan-samuraijack-1449189177030-1280w-skmh-1038393.jpg",
  scores: [3,3,3,3,3,3,3,3,3,3]
  },
  {name: "SpongeBob Squarepants",
  photo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/330px-SpongeBob_SquarePants_character.svg.png",
  scores: [1,1,1,1,1,1,1,1,1,1]
  },
  {name: "Princess Zelda",
  photo: "https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/e/eb/ALBW_Princess_Zelda_Artwork.png/260px-ALBW_Princess_Zelda_Artwork.png?version=4a09897be3da1ddb1f9614ef5a33f2dc",
  scores: [5,5,5,5,5,5,5,5,5,5]
  }
]

app.post('/newFriend', (req, res)=>{
  friends.push(req.body)
  res.sendStatus(200)
})

app.get('/getFriends', (req, res)=>{
  res.send(friends)
})


app.listen(3000, ()=>{console.log("Server is listening")})