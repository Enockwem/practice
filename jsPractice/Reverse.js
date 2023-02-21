function reverseArray(array){
    let reversed = [];
    for(let i = array.length -1; i >= 0; i--){
        reversed.push(array[i]);
    }
    return reversed;
}


function reversedArrayInPlace(){
    let reversed = [];
}
console.log(reverseArray(["A","B","C"]));
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));

const ages = {
    Brenda: 45,
    Enock: 25,
    Kevin: 23
}

console.log(`Enock is ${ages["Enock"]} old`);
console.log("Is Male's age known?", "Male" in ages);
console.log("Is toString's age known? ", "toString" in ages);

console.log("toString" in Object.create(null));

let ages1 = new Map();
ages1.set("Enock",25);
ages1.set("Kevin",23);
ages1.set("Elijah",28);

console.log(ages1.has("toString"));

let okIterator = "Enock"[Symbol.iterator]();
let count = 0;
while(!okIterator.next().done){
    count++;
}

console.log(count)