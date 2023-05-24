// Okay what if the path suggested is doesn't let to the winnable path 
function canJump(array){
  let curr = array[0]
    if(array.length === 1){
        return false
    }else if(curr > array.length - 1){
        return true
    }else{
        let index_1 = 1;
        while(index_1 < curr){
            if(array[index_1] > 0){
                break;
            }else{
                index_1++;
            }
        }
        return canJump(array.slice(index_1));
    }
}