const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=c291fd72a36cef461b8a616fefbefbc1&query=' + encodeURIComponent(address) + '&bbox_module=1'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to location services', undefined)
        }
        else if (body.error) {
            callback('unable to find location try another search', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].name
            })
        }
    })
}

module.exports = geocode