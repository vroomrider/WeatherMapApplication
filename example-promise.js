function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
    }else{
        reject('value is not a number!');
    }
  });
}

addPromise(2,4).then(function(temp){
    console.log('Sum is ',temp);
  },function(err){
    console.log('Invalid Data! ' , err);
});
addPromise('a',4).then(function(temp){
    console.log('Sum is ',temp);
  },function(err){
    console.log('Invalid Data! ' , err);
});
addPromise(2,'b').then(function(temp){
    console.log('Sum is ',temp);
  },function(err){
    console.log('Invalid Data! ' , err);
});
addPromise('Hello','Promise').then(function(temp){
    console.log('Sum is ',temp);
  },function(err){
    console.log('Invalid Data! ' , err);
});
