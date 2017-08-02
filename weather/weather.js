const request = require('request');
var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/5302888276e1fc1ecba9d482abeeec20/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(`Temp is: ${body.currently.temperature}`);
      callback(`Feels like: ${body.currently.apparentTemperature}`);
    } else {
      callback(body.code);
      callback(body.error);
    }
  });
};

module.exports = {
  getWeather
};
