/**
 * The user should first select whether to use 'x' or to use 'o'.
 * I am going to first customize it, so that the computer uses 'o' and the one playing against to use 'x'
 * When the user click a given tile, it should be labeled the letter he choose.
 * I am gonna use array operations in javascript to be able to capture the logic of the game.
 * @author WASSWA ENOCK MALE
 * This is a tic tac toe game.
 * [[0,1,2],
 *  [3,4,5],
 *  [6,7,8]]
 */

// This returns the collection of all elements with a 'tile' class and stores them in tilediv
let tilediv = document.getElementsByClassName('tile')
// console.log(tilediv)

let resArr = []
/**
 * The function below adds a click listener to all the div elements that have class tile.
 */
let clickTile = ()=>{
    for(let tile of tilediv){
        // const tile = tilediv[item]
        tile.addEventListener('click', (event)=>{
            if(event.target.textContent === ""){
                event.target.textContent = "X"
                resArr[tile.id - 1] = "X"
            }
        })
    }
}
/**
 * This function calculates things
 */
// clickTile()
// checkMatching(resArr)
// computerTurn(resArr,3)
// console.log(resArr)

/**
 * @param {array} resArr 
 * @param {index of the last enetered element} indexHumanPlayed
 */
let computerTurn = (resArr, indexHumanPlayed)=>{
    if(resArr.length == 9){
        // should be game over 
        console.log(resArr)
    }else{
        console.log("It works fine")
    }
}

/**
 * 
 * @param {*} arr 
 * @returns a string
 */
let checkMatching = (arr)=>{
    console.log("In the matching function", arr)
}