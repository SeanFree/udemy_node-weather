const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather.js');

const argv = yargs.options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
  
geocode.geocodeAddress(argv.address, (errorMessage, geocodeResults) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weather.getWeather(geocodeResults.latitude, geocodeResults.longitude, (errorMessage, weatherResults) => {
      console.log(`Weather for\n${geocodeResults.address}\n-------`);
      console.log(`The current temperature is ${weatherResults.temperature}`);
      console.log(`It feels like ${weatherResults.apparentTemperature}`);
    });
  }
});