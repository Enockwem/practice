function flattern(array){
    return array.reduce((pre,curr)=> pre.concat(curr), []);
}
console.log(flattern([[1,2,4],[9,10,11]]));
console.log(flattern([[1, 2, 3], [4, 5], [6]]));

function loop(n, test, update, body){ // test, update and body are functions.
    if(!test(n)){
        return;
    }
    body(n);
    n = update(n);
    loop(n, test, update, body);
}

loop(3, n => n > 0, n => n - 1, console.log);


// function every(array, test) {
//     // Your code here.
//     for(let element of array){
//       if(!test(element)) return false;
//     }
//     return true;
//   }

function every(array, test){
    if(array.some(test)) return false;
    return true;
  }

  console.log(every([1, 3, 5], n => n < 10));
  console.log(every([2, 4, 16], n => n < 10));
  console.log(every([], n => n < 10));
