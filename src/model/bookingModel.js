const { connectHelper } = require('../helper/connector')

module.exports = {
  setBookingModel: (setData) => {
    return connectHelper('INSERT INTO booking SET ?', setData)
  },
  getBookingModel: (id) => {
    return connectHelper('SELECT * FROM `booking` JOIN passenger ON booking.booking_id = passenger.booking_id WHERE booking.user_id = ?', id)
  },
  setPassengerModel: (setData) => {
    return connectHelper('INSERT INTO passenger SET ?', setData)
  }
}
