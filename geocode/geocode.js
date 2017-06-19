const request = require('request');

let geocodeAddress = (address, callback) => {
  request({
    url: `https://maps.google.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body.status === 'ZERO_RESULTS') {
      console.log(`No results found for ${address}`);
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;