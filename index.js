const express = require("express")
const router =require("./src/routes/routes")
var parser = require('body-parser');
const app= express()
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
const port = 1234
app.set("view engine","ejs")
app.set("views","./src/views")
app.use('/',router)
app.use('/css',express.static(__dirname+'/public/css'))
app.listen(port,()=>{
console.log(`Listening on port ${port}`)
})