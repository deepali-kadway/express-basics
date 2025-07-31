//What is express?
// Express is used to create web servers in node. Express works on a midleware concept (callback functions)

const express = require('express'); // Importing the express module

const app = express()

// localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World')
})

// localhost:3000/hello2
app.get('/hello2', (req, res) => {
  res.send("Hello World 2.0")
})

app.listen(3000)