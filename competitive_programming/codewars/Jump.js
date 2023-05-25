// Okay what if the path suggested is doesn't let to the winnable path
// At each step you can jump ahead in the array 
// as far as the integer at the current cell, 
// or any smaller number of cells. You win if 
// there is a path that allows you to jump from 
// one cell to another, eventually jumping past 
// the end of the array, otherwise you lose.
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
              // check every posible solution.
              // check whether this direction will lead to a dead end.
              // If there is no other solution them go with the last solution.
              
              break;
            }else{
                index_1++;
            }
        }
        return canJump(array.slice(index_1));
    }
}