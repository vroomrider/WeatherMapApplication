var names = ['Pradeep', 'Viresh', 'Kusuma'];

var person = {
  name: 'Andrew',
  greet: function () {
    names.forEach((name) => {
    console.log(this.name +' is with '+ name);
  });
  }
}
person.greet('Pradeep');

console.log('======== forEach arrow =======');
function add(a, b) {
  return a + b;
}
var data = [1,2,3,4,5];

//data.forEach((value) => console.log(add(value,4)));

data.forEach((val) => {
  console.log(add(1,val));
});

// 0.14 version of React => Using the Stateless Functional Components
