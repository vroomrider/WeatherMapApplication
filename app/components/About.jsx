var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h6>About</h6>
//       </div>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h2>About Props</h2>
      <marquee><p> This is a About Page for the Application</p></marquee>
    </div>
  );
}

module.exports = About;
