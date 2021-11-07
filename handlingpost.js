const express = require('express');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}))

app.post('/post-data-here', function(req, res, next){
    console.log(req.body)
})

app.listen(8080, 'localhost')