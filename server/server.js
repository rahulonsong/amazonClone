const express = require('express') 
const morgan = require('morgan')
const bodyParser = require('body-parser')


const app = express()

// Middleware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// GET - Retrieve data from the server
app.get('/', (req, res, next) => {
    res.json("Hello Amazon Clone!")
})


// POST - send data from front end to back end
app.post('/', (req, res, next) => {
    console.log(req.body.name);
})


app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on PORT 3000!");
    }
})