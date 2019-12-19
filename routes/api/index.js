const router = require("express").Router();
const authorRoutes = require('./authors');
const bookRoutes = require('./books')

// Book routes
router.use("/authors", authorRoutes);
router.use("/books", bookRoutes);

module.exports = router;