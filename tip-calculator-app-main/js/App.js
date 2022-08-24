import { removeComma } from "./removeOperator.js"
import { thousandOperator } from "./thousandOperator.js"

const bill = document.getElementById("bill-amount")
const numPeople = document.getElementById("num-people")
const tipAmount = document.getElementById("tip-amount")
const total = document.getElementById("total")
const tip_input = document.getElementById("tipAmount")
const people = document.getElementById("people")

let bill_input = ""
let num_input = ""
let select_tip;

bill.addEventListener('input',(event)=>{
    bill_input = event.target.value 
    // console.log(bill_input)
    event.target.value = thousandOperator(removeComma(bill_input))
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
    // if(num_input !== ""){
        
    // }
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
document.querySelectorAll('.tile').forEach((tile)=>{
    tile.addEventListener('click',()=>{
        let k = tile.textContent.split("%")[0].trim()
        console.log(bill_input)
        console.log(num_input)
        console.log(k)
        if(bill_input !== "" && num_input !== ""){
            tipAmount.innerHTML = Number(removeComma(bill_input))/(+num_input)
            total.innerHTML = ((Number(num_input) * (Number(k)))/100) * Number(removeComma(bill_input))
        }
    })
})