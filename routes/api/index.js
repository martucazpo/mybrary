const router = require("express").Router();
const authorRoutes = require('./authors');

// Book routes
router.use("/authors", authorRoutes);

module.exports = router;