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


let resArr = [1,2,3,4,5,6,7,8,9]

let count = 1

function go(next){
    if(next){
        clickTile()
    }else{
        computerTurn()
    }
}

/**
 * @returns a boolean
 */
function checkboxFun() {
    // If the user checks or not, a value will be returned
    let holdcheck = checkbox.checked
    checkbox.addEventListener('change', ({target:{checked}}) => {
        // Check the onclick button
        holdcheck = checked
        // console.log(checked)
    })
    
    return holdcheck;
}

let checkB = checkboxFun()

/**
 * The function below adds a click listener to all the div elements that have class tile.
 */
function clickTile(){
    for(let tile of tilediv){
        // const tile = tilediv[item]
        tile.addEventListener('click', (event)=>{
            if(event.target.textContent === ""){
                event.target.textContent = "X"
                resArr[tile.id - 1] = "X"
            }else{
                console.log("Has already been selected.")
            }
            // console.log(resArr)
            // let arr = computerTurn(resArr, tilediv)
            // console.log(computerTurn(resArr, tilediv))
            // let random = Math.floor(Math.random() * 8)
            // if(tilediv.textContent === ""){
            //     tilediv[random].textContent = "O"
            // }else{
            //     random = Math.floor(Math.random()*8)
            //     tilediv[random].textContent = "O"
            // }
        })
    }
}

// console.log(resArr)
/**
 * This function calculates things
 */
// clickTile(resArr)
clickTile()
// checkMatching(resArr)
// computerTurn(resArr,3)
// console.log(resArr)

/**
 * @param {array} resArr 
 * @param {index of the last enetered element} indexHumanPlayed
 * In this method, the computer has to use the random Math method to guess what to play next
 */
// function computerTurn(arr, /*indexHumanPlayed,*/ tile){
//     // Check for the vertical friends of indexhuman played
//     let newArr = []
//     for(let k of arr){
//         if(typeof k === 'number'){
//             newArr.push(k)
//         }
//     }
//     let value = Math.floor(Math.random() * 8)
//     arr[value] = "O"
//     tile[value].textContent = "O"
// }

/**
 * 
 * @param {*} arr 
 * @returns a string
 */
function checkMatching(arr){
    console.log("In the matching function", arr)
}

/**
 * Do the horizontal check to see if it is the same
 * horizontal check, vertical check and diagnol check.
 */
function checkVertical(arr){
    // There are three vertical values in the game.
    let first = 0, second = 3, third = 6
    // Now pick out three values from the array, for the first vertical value.
    // To get the next three vertical values, you will have to add 1 to the three variables of
    // first, second and third.
    for(let k = 0; k < 3; k++){
        console.log(typeof arr[first])
        break
    }
}

// checkVertical(resArr)
function checkHorizontal(arr){
    // There are three horizontal values in the game.
    // To get the next horizontal values, you will have to add 3 to the three variables of first,
    // second and third.
    let first=0, second = 1, third = 2
    for(let k = 0; k < 3; k++){
        console.log(typeof arr[first])
    }
}

function checkDiagnol(arr){
    // There are only two diagnols in the box
    // The two diagnols are at values, [0,4,8] and [2,4,6] which are the only even numbers.

}