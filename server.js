if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const routes = require('./routes')
const mongoose = require('mongoose')
const dbase = mongoose.connection
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(routes)

mongoose.connect(process.env.DATABASE_URL || process.env.MONGODB_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
})
dbase.on('error', error => console.error(error))
dbase.once('open', () => console.log( 'mongoose is on the loose' ))

app.listen(PORT)
