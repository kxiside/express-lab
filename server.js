const express = require('express')
const path = require('path')
const carsDB = require('./data/cars-db')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    res.redirect('/cars')
})

app.get('/cars', function(req, res) {
    const cars = carsDB.getAll()
    res.render('cars/index', { cars })
})

app.listen(3000, function() {
    console.log('port 3000 currently listening')
})

