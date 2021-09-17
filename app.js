const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


forecast(4.769182, 7.032953, (e, data) => {
    console.log('Error:', e)
    console.log('Data:', data)
  })

geocode('Kaduna', (e, data) => {
    console.log('Error:', e)
    console.log('Data:', data)
})


