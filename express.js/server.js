const express = require('express')
const app = express()

app.set('vew engine', "ejs")

app.get('/', (req, res)=>{
    console.log('Here')    
    res.render("index"  , {text: "World"})
    
})

app.get('/users', (req, res)=>{
    res.send('User List')
})

app.get('/users/new', (req, res)=>{
    res.send('Users New Form')
})

const useRouter = require('./routes/users')

app.use('/users', useRouter)

app.listen(3000)