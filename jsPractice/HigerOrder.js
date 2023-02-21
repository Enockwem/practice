function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}
let arr = [];
repeat(5, i => {
    arr.push(`Unit ${i}`);
});

console.log(arr);

function filterIt(array, test){
    let passed = [];
    for(let element of array){
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}

let array = [1,2,3,4,5,6,7,8,9,10];
console.log(filterIt(array, element =>{
    if(element%2 === 0){
        return true;
    }else{
        return false;
    }
}));
