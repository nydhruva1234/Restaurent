const homeController = require('../backend/http/controllers/homecontroller')
const authController=require('../backend/http/controllers/authController')
const cartController=require('../backend/http/controllers/customers/cartController')
function initRoutes(app){
    
    app.get('/',homeController().index)
    
    //(req,res)=>{
      //  res.render('home')
    //})
    app.get('/',(req,res)=>{
        res.render('home')
    })
    
    app.get('/cart',cartController().index)
    app.get('/login',authController().login)
    
    app.get('/register',authController().register)
    
    app.post('/register',(req,res)=>{
    
    })
}


module.exports= initRoutes
