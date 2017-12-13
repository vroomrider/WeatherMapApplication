var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = (props) => {
  return (
    <div>
      <h6>Nav Component</h6><h2>Weather Map</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>&emsp;&emsp;
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>&emsp;&emsp;
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Examples</Link>
    </div>
  );
}

module.exports = Nav;
