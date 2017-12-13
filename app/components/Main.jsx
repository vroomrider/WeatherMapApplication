var React = require('react');
var Nav = require('Nav');


// var Main = React.createClass({
//   render: function () {
//     return (
//       <div >
//         <Nav/>
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div >
      <center>
      <Nav/>
      <center>
        <h2>Master Component</h2>
        {props.children}
        <marquee>Copy Rights Incorporated! @Author - vroomrider</marquee>
      </center>
      </center>
    </div>
  );
}
module.exports = Main;
