const router = require('express').Router()
const book = require('./router/bookingRoute')

router.use('/booking', book)

module.exports = router
