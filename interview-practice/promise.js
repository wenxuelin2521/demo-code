var p = new Promise(function(resolve, reject){
    resolve(1);
  });
  p.then(function(value){               //第一个then
    console.log(value); // 1
    return value*2;
  }).then(function(value){              //第二个then
    console.log(value); // 2
  }).then(function(value){              //第三个then
    console.log(value); // undefined
    return Promise.resolve('resolve'); 
  }).then(function(value){              //第四个then
    console.log(value); // resolve
    return Promise.reject('reject');
  }).then(function(value){              //第五个then
    console.log('resolve: '+ value);
  }, function(err){
    console.log('reject: ' + err); // reject:reject
  })
  
  // 1 2 undefined resolve reject:reject