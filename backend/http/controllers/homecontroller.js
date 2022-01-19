const res = require("express/lib/response")
const Menu=require('../../models/menu')
function homeController(){
    return{
       async index(req,res){
           const resta=await Menu.find()
           console.log(resta)
           return res.render('home',{resta:resta})
        },
      
        }
    }

module.exports =homeController