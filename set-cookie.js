//with cookie parser

let express = require('express')
let cookieParser = require('cookie-parser')
let app = express()
app.use(cookieParser())

app.listen(8080);

app.get('/setcookie', function(req, res){
    res.cookie('username', 'Mahardika', {maxAge: 900000, httpOnly: true});
    return res.send('Cookie has been set');
})

app.get('/getcookie', function(req, res){
    let username = req.cookies['username'];
    if(username){
        return res.send(username);
    } else {
        return res.send('Cookie not found');
    }
})

app.get('/deletecookie', function(req,res){
    res.clearCookie('username')
    return res.send('Cookies has been destroyed');
})

console.log('Server is running.....')