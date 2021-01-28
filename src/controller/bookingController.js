const helper = require('../helper/response')

const {
  setBookingModel,
  getBookingModel,
  setPassengerModel
} = require('../model/bookingModel')

module.exports = {
  setBooking: async (req, res) => {
    try {
      const {
        user_id: userId,
        schedule_id: scheduleId,
        insurance,
        total_payment: totalPayment,
        status
      } = req.body
      const setData = {
        userId,
        scheduleId,
        insurance,
        totalPayment,
        status
      }
      const result = await setBookingModel(setData)
      return helper.response(res, 200, 'Booking is Successful', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getBooking: async (req, res) => {
    try {
      const id = req.params.id
      const result = await getBookingModel(id)
      return helper.response(res, 200, 'Success Get Booking', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  setPassenger: async (req, res) => {
    try {
      const {
        title,
        fullname,
        nationality,
        booking_id: bookingId
      } = req.body
      const setData = {
        title,
        fullname,
        nationality,
        bookingId
      }

      const result = await setPassengerModel(setData)
      return helper.response(res, 200, 'Passenger input success', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Requaet', error)
    }
  }
}
