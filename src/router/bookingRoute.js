const router = require('express').Router()
const {
  setBooking,
  getBooking,
  setPassenger
} = require('../controller/bookingController')

router.post('/', setBooking)
router.get('/:id', getBooking)
router.post('/passenger', setPassenger)

module.exports = router
