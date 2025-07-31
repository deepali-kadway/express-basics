//What is express?
// Express is used to create web servers in node. Express works on a midleware concept (callback functions)

const express = require('express'); // Importing the express module

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)