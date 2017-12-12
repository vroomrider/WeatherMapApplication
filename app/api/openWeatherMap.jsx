var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=7f0b8856e167215ddc4ea21cbda6ad75&units=imperial';

module.exports = {
  getTemp: function(location){
  var encodedLocation = encodeURIComponent(location);
  var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl).then(function (successRes) {
      debugger;
      if(successRes.data.cod && successRes.data.message){
        throw new Error(successRes.data.message);
      }else{
        return successRes.data.main.temp;
      }
    }, function (errRes) {
        throw new Error(errRes.data.message);
    });
  }
}
