const request = require('request')

const forecast = (longtitude, latitude, cb) => {
    const url = 'http://api.weatherstack.com/current?access_key=51d5292e14f1205e03494c5b6b23e5a6&query=' + latitude + ',' + longtitude + '&units=f'

    request({ url: url, json: true}, (e, res) => {
        if(e) {
            cb('Unable to connect to server!', undefined)
        } else if(res.body.error) {
            cb('The request does not exist. Please try again!', undefined)
        } else {
            cb(undefined, {
                weather_desc: res.body.current.weather_descriptions[0],
                temp: res.body.current.temperature,
                feelslike: res.body.current.feelslike
            })
        }
    })
}

  module.exports = forecast