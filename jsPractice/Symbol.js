let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
// Also remember that you can call a function with a specific this 
// binding by using its call method.
// console.log(map.hasOwnProperty("one"));
console.log({}.hasOwnProperty.call(map, "one"));
// → true
// console.log(map.hasOwnProperty);