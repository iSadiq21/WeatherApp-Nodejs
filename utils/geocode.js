const request = require('request')

const geocode = (address, cb) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2tlbmd3ZXMiLCJhIjoiY2t0bXlxdm15MDA5bjJudGl1cHVkb2lxbCJ9.fAOXisfwp6AjomwvpK33SQ&limit=1'

    request({ url: url, json: true}, (e, res) => {
        if(e) {
            cb('Unable to connect to server', undefined) 
        } else if (res.body.features.length === 0) {
            cb('The location does not exist. Please try searching again!', undefined)
        } else {
            cb(undefined, {
                latitude: res.body.features[0].center[1],
                longtitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode