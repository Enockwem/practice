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

/**
 * This this the function that will be called when it's time to play the game.
 */

// This returns the collection of all elements with a 'tile' class and stores them in tilediv
let tilediv = document.getElementsByClassName('tile')

let checkbox = document.getElementById("yes")


let resArr = [10,11,12,13,14,15,16,17,18]

let count = 0
let go = ()=>{
    // now, hold value of the checkbox
    let checkbool = checkboxFun()

}


/**
 * @returns a boolean
 */
function checkboxFun() {
    // If the user checks or not, a value will be returned
    let holdcheck = checkbox.checked
    checkbox.addEventListener('click', ({target:{checked}}) => {
        // Check the onclick button
        holdcheck = checked
    })
    return holdcheck;
}

// let checkB = checkboxFun()

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
                console.log(resArr)
            }
        })
    }
}

// console.log(resArr)
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

}

/**
 * 
 * @param {*} arr 
 * @returns a string
 */
let checkMatching = (arr)=>{
    console.log("In the matching function", arr)
}

/**
 * Do the horizontal check to see if it is the same
 * horizontal check, vertical check and diagnol check.
 */