let express = require('express')
let cookieParser = require('cookie-parser')
let app = express()

app.use(cookieParser())

app.listen(8080)


app.use(function(req, res, next){
    req.user = 'testuser';
    next(); // it will pass the control to next matching route
});
app.get('/', function(req, res){
    var user = req.user;
    console.log(user); // testuser
    return res.send(user); });


// app.get('/setcookie', function(req, res, next){
//     res.cookie('isLoggin', true)
//     return res.send('You are login');
// })
//
// app.use(function(req,res,next){
//     req.login = req.cookies['isLoggin'];
//     next();
// })
//
// app.get('/',function(req, res){
//     let loggin = req.cookies['isLoggin']
//     return res.send(loggin)
// })
//
// app.get('/deletecookie', function(req,res){
//     res.clearCookie('isLoggin')
//     return res.send('Cookies has been destroyed');
// })
//
// app.use(function(error, res, next){
//     console.log(error.stack)
//     return res.status('You are not login now!');
// })