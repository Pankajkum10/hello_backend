require('dotenv').config()

console.log("radhe radhe");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req ,res) =>{ 
    res.send('pankajkum10')
})

app.get('/login',( req, res) =>{
    res.send('<h1>do sign up here at Radhe Krishna </h1>')
})

app.get('/youtube',( req, res)=>{

    res.send('go to your youtube ')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
