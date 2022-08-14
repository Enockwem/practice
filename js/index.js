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
function go(){
    // now, hold value of the checkbox
    let checkbool = checkboxFun()
    if(checkbool){
        console.log("The user wants to go first!")
        // while(count <= 9){
        if(count % 2 == 0){
            computerTurn()
            count++
        }else{
            clickTile()
            count++
        }
        // }
    }else{
        console.log("The user doesn't want to go first")
    }
}
go()
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
 * In this method, the computer has to use the random Math method to guess what to play next
 */
function computerTurn(resArr, indexHumanPlayed){

}

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
    for(let k = 0; k < 3; k++){
        console.log(typeof arr[first])
        break
        // if(typeof arr[first] === Number){
        //         console.log("They are numbers")
        //         first++
        //         second++
        //         third++
        //     }else{
        //         first++
        //         second++
        //         third++
        //         console.log("They are not sure")
        //     }
    }
}

checkVertical(resArr)
function checkHorizontal(arr){
    // There are three horizontal values in the game.
    let first, second, third
}

function checkDiagnol(arr){
    // There are only two diagnols in the box

}