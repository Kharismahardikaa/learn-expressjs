const express = require('express')
//const greetMiddleware = require('./greet.js')

var app = express()





// app.get('/names/:name', function(req, res, next){
//     if(req.params.name === 'john'){
//         return res.send('Valid name');
//     } else {
//         next(new Error('Not valid name'));
//     }
// })
//
// app.use(function(err, req, next){
//     console.log(err.stack);
//     return res.status(500).send('Internal Server Occurred');
// })
//
// app.listen(3000);


// class GreetingService {
//     constructor(greeting = 'Hello'){
//         this.greeting = greeting;
//     }
//
//     createGreeting(name){
//         return `${this.greeting}, ${name}!`;
//     }
// }
//
// express()
//     .use('/api/v1/service1', greetMiddleware({
//         service: new GreetingService('Hello')
//     }))
//     .use('/api/v1/service2', greetMiddleware({
//         service: new GreetingService('Hi')
//     }))
//     .listen(8080);

console.log('Server is running.....');