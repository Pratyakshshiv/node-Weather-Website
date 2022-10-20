const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=53a72ecfa950a48e9c30b38df4e65701&query=' + latitude + ',' + longitude + '&units=f'


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather service', undefined)
        }
        else if (body.error) {
            callback('unable to find location', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + ' it is currently ' + body.current.temperature + ' degrees out.It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast