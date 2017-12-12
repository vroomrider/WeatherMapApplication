var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      idLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (errMessage) {
      that.setState({isLoading: false});
      alert(errMessage);
    });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;
    function renderMessage () {
      if(isLoading){
        return <h3>Fetching Weather...</h3>;
      }else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }// End of renderMessage()
    return (
        <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        </div>
    );
  }// End of render()
});
module.exports = Weather;
