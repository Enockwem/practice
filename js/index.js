/**
 * The user should first select whether to use 'x' or to use 'o'.
 * I am going to first customize it, so that the computer uses 'o' and the one playing against to use 'x'
 * When the user click a given tile, it should be labeled the letter he choose.
 * I am gonna use array operations in javascript to be able to capture the logic of the game.
 * @author WASSWA ENOCK MALE
 * This is a tic tac toe game.
 */

// This returns the collection of all elements with a 'tile' class and stores them in tilediv
let tilediv = document.getElementsByClassName('tile')

let resArr = []
/**
 * The function below adds a click listener to all the div elements that have class tile.
 */
let clickTile = ()=>{
    for(let tile of tilediv){
        tile.addEventListener('click',(event)=>{
            if(event.target.textContent === ""){
                event.target.textContent = 'x'
            }else{
                console.log(event.target.textContent)
            }
        });
    }
}

clickTile()