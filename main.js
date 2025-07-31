//What is express?
// Express is used to create web servers in node. Express works on a midleware concept (callback functions)

const express = require('express'); // Importing the express module

const app = express()

//Middleware is a function that has access to the req and res object
//you can think of a middleware as a ayer that sits between the request and response.
function customMiddleware(req, res, next){
    console.log('Custom middleware executed');
    next(); // Call next() to pass control to the next middleware or route handler
}

// use the middleware function when a request comes in from the web.
app.use(customMiddleware); // Using the custom middleware in the express app

// localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World')
})

// localhost:3000/hello2
app.get('/hello2', (req, res) => {
  res.send("Hello World 2.0")
})

app.listen(3000)