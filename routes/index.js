
const router = require('express').Router()
const apiRoutes = require('./api')
const db = require('../models')
const Book = db.Book

router.use('/', apiRoutes)

router.get('/', async (req, res) => {
    let book = []
    try{
        books = await Book.find().sort({ createdAt: 'desc' }).limit(10).exec()
    } catch {
        books = []
    }
    res.render('index', { books: books })
})

module.exports = router

