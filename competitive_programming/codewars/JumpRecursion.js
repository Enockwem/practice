function Jump(arr){
    let curr = arr[0]
    let ar;
    if(arr.length === 1){
        return false
    }else if(curr > arr.length - 1){
        return true
    }else{
        let index_1 = 1;
        while(index_1 < curr){
            if(arr[index_1] > 0){
                break;
            }else{
                index_1++;
            }
        }
        return Jump(arr.slice(index_1));
    }
}

const arr = [2, 0, 3, 5, 0, 0, 3, 0, 0, 3, 1, 0];
const arr_1 = [4, 1, 2, 0, 1];
const ar = [2,1,2,1]
console.log(Jump(arr))
console.log(Jump(arr_1))
console.log(Jump(ar))