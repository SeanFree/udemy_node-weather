// API key
// 5541c60c2643fab5ef72f4023aab94e8

const request = require('request');

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/5541c60c2643fab5ef72f4023aab94e8/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      console.log('Unable to fetch weather');
    }
  });
};

module.exports = {
  getWeather
};