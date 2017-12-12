var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//
//     var {temp, location} = this.props;
//     return (
//       <div>
//         <h1><b>It is {temp} in {location}!</b></h1>
//       </div>
//     );
//   }
// });

var WeatherMessage = (props) => {
  var {temp, location} = props;
  return (
    <div>
      <h1><b>It is {temp} in {location}!</b></h1>
    </div>
  );
}
module.exports = WeatherMessage;
