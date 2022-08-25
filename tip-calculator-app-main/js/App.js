import { removeComma } from "./removeOperator.js"
import { thousandOperator } from "./thousandOperator.js"

const bill = document.getElementById("bill-amount")
const numPeople = document.getElementById("num-people")
const tipAmount = document.getElementById("tip-amount")
const total = document.getElementById("total")
const tip_input = document.getElementById("tipAmount")
const people = document.getElementById("people")
const but = document.getElementById("reset")
const editable = document.getElementById("editable")
const collection = document.querySelectorAll('.tile')
const tileDiv = [...collection]

console.log(tileDiv)
let bill_input = ""
let num_input = ""
let select_tip = "";
let arrColor = new Array(5).fill("gray") // This should hold the tile that has a different color

bill.addEventListener('input',(event)=>{
    bill_input = event.target.value 
    event.target.value = thousandOperator(removeComma(bill_input))
    if(bill_input !== ""){
        if(num_input !== "" && select_tip !== ""){
            tipAmount.innerHTML = Math.round((Number(removeComma(bill_input)) - (Number(select_tip)/100 * Number(removeComma(bill_input))))/Number(num_input))
            total.innerHTML = Math.floor(Number(removeComma(bill_input))/(+num_input))
        }
    }
        if(tipAmount.textContent !== "0.00" && total.textContent !== "0.00"){
        but.disabled = false
    }else{
        but.disabled = true
    }
})

// Using the onblur and onfocus
bill.onblur = function(){
    if(bill_input === ""){
        const empty = document.querySelector(".empty-message")
        let p = document.createElement('p')
        p.innerHTML = "Can't be empty"
        p.classList.add("cantBebill")
        empty.append(p)
        tip_input.classList.remove("input-div")
        tip_input.classList.add("input-empty")
    }
}

// When forcus is on, then, it will remove the 'can't be empty message'
bill.onfocus = function(){
    let empty = document.querySelector(".empty-message")
    let p = document.querySelector(".cantBebill")
    if(p !== null){
        empty.removeChild(p)
        tip_input.classList.remove("input-empty")
        tip_input.classList.add("input-div")
    }
}


/**
 * Below here is the code for the number of people input mutation
 */
numPeople.addEventListener('input',(event)=>{
    num_input = event.target.value
    console.log(select_tip)
    if(num_input !== ""){
        if(bill_input !== "" && select_tip !== ""){
            tipAmount.innerHTML = Math.round((Number(removeComma(bill_input)) - (Number(select_tip)/100 * Number(removeComma(bill_input))))/Number(num_input))
            total.innerHTML = Math.floor(Number(removeComma(bill_input))/(+num_input))
        }
    }
    if(tipAmount.textContent !== "0.00" && total.textContent !== "0.00"){
        but.disabled = false
    }else{
        but.disabled = true
    }
})

numPeople.onblur = function(){
    if(num_input === ""){
        const empty = document.querySelector(".empty-message-num")
        let p = document.createElement('p')
        p.innerHTML = "Can't be empty"
        p.classList.add("cantBeNum")
        empty.append(p)
        people.classList.remove("input-div")
        people.classList.add("input-empty")
    }
}

numPeople.onfocus = function(){
    let empty = document.querySelector(".empty-message-num")
    let p = document.querySelector(".cantBeNum")
    if(p !== null){
        empty.removeChild(p)
        people.classList.remove("input-empty")
        people.classList.add("input-div")
    }
}


/**
 * Now we are looking at making calculations
 * Adding the onclick listener to the div in the selet tip % option
 */
for(let tile of tileDiv){
    // collection.forEach((tile)=>{
        tile.addEventListener('click',()=>{
            let k = tile.textContent.split("%")[0].trim()

            if(arrColor.includes("changed")){
                let va = arrColor.indexOf("changed")
                console.log(va)
                tileDiv[va].classList.remove("changeTipColor")
                arrColor[va] = "gray"
            }
            select_tip = k
            console.log(arrColor)
            let index = tileDiv.indexOf(tile) // This holds the index of tile being clicked
            tile.classList.add("changeTipColor")
            arrColor[index] = "changed"
            if(bill_input !== "" && num_input !== ""){
                tipAmount.innerHTML = Math.round((Number(removeComma(bill_input)) - (Number(k)/100 * Number(removeComma(bill_input))))/Number(num_input))
                total.innerHTML = Math.floor(Number(removeComma(bill_input))/(+num_input))
            }
    
            if(tipAmount.textContent !== "0.00" && total.textContent !== "0.00"){
                but.disabled = false
            }else{
                but.disabled = true
            }
        })
    // })
}

// Reloading the index.html file using the reset button.
but.onclick = function(){
    location.reload()
}

editable.onfocus = function(){
    editable.textContent = ""
}

editable.oninput = function(){
    let k = editable.textContent
    select_tip = k
    if(k !== ""){
        if(bill_input !== "" && num_input !== ""){
            tipAmount.innerHTML = Math.round((Number(removeComma(bill_input)) - (Number(k)/100 * Number(removeComma(bill_input))))/Number(num_input))
            total.innerHTML = Math.floor(Number(removeComma(bill_input))/(+num_input))
        }
    }

    if(tipAmount.textContent !== "0.00" && total.textContent !== "0.00"){
        but.disabled = false
    }else{
        but.disabled = true
    }
}

/**
 * disabling the reset button
 */
if(tipAmount.innerHTML === "0.00" && total.innerHTML === "0.00"){
    but.disabled = true
}