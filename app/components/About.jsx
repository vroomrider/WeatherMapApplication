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
      <p> This is a About Page for the Application</p>
    </div>
  );
}

module.exports = About;
