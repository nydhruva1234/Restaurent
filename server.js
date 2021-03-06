const express=require('express')
const path=require('path')
const app=express();
const ejs=require('ejs')
const expresslayout=require("express-ejs-layouts")
const port=process.env.port||3000
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/restaurent')

mongoose.Promise = global.Promise;
const connection=mongoose.connection
connection.once('open',()=>{
    console.log("database conected")
})


app.use(express.static('frontend'))
app.use(expresslayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')
require('./routes/web')(app)


app.listen(port, function(){
    console.log(`Listening to the port ${port}`)
})