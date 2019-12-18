if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const routes = require('./routes')
const mongoose = require('mongoose')
const db = mongoose.connection
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(routes)

mongoose.connect(process.env.DATABASE_URL || MONGODB_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
})
db.on('error', error => console.error(error))
db.once('open', () => console.log( 'mongoose is on the loose' ))

app.listen(PORT)
