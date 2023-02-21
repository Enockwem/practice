function range(...numbers){
    let [start, end, step] = numbers;
    let array = [start];
    if(step == undefined){
        for(let i = 1; i <= (end - start); i++){
            array[i] = start + i;
        }
    }else{
        while(start != end){
            start += step;
            array.push(start);
        }
    }
    
    return array;
}

function sum(array){
    return array.reduce((prev, curr)=>prev + curr,0);
}
console.log(range(5,2,-1));
console.log(sum(range(5,2,-1)));
console.log(sum(range(1,10)));