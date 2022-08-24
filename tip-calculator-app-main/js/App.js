import { removeComma } from "./removeOperator.js"
import { thousandOperator } from "./thousandOperator.js"

const bill = document.getElementById("bill-amount")
const numPeople = document.getElementById("num-people")
const tipAmount = document.getElementById("tip-amount")
const total = document.getElementById("total")
const tip_input = document.getElementById("tipAmount")
const people = document.getElementById("people")

let bill_input = ""
bill.addEventListener('input',(event)=>{
    bill_input = event.target.value 
    console.log(bill_input)
    if(bill_input === ""){
        tipAmount.innerHTML = "0.00"
    }else{
        tipAmount.innerHTML = bill_input
        event.target.value = thousandOperator(removeComma(bill_input))
    }
})

// Using the onblur and onfocus
bill.onblur = function(){
    if(bill_input === ""){
        const empty = document.querySelector(".empty-message")
        let p = document.createElement('p')
        p.innerHTML = "Can't be empty"
        p.classList.add("cantBe")
        empty.append(p)
        tip_input.classList.remove("input-div")
        tip_input.classList.add("input-empty")
    }
}

// When forcus is on, then, it will remove the 'can't be empty message'
bill.onfocus = function(){
    let empty = document.querySelector(".empty-message")
    let p = document.querySelector(".cantBe")
    if(p !== null){
        empty.removeChild(p)
        tip_input.classList.remove("input-empty")
        tip_input.classList.add("input-div")
    }
}