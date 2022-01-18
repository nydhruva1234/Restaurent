const express=require('express')
const path=require('path')
const app=express();
const ejs=require('ejs')
const expresslayout=require("express-ejs-layouts")
const port=process.env.port||3000



app.use(express.static('frontend'))
app.use(expresslayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/cart',(req,res)=>{
    res.render('customers/cart')
})
app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.listen(port, function(){
    console.log(`Listening to the port ${port}`)
})