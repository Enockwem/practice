console.log("I am here")
import { removeComma } from "./removeOperator"
import { thousandOperator } from "./thousandOperator"

const bill = document.getElementById("bill-amount")
const numPeople = document.getElementById("num-people")
const tipAmount = document.getElementById("tip-amount")
const total = document.getElementById("total")


let bill_input = ""
bill.addEventListener('input',(event)=>{
    bill_input = event.target.value 
    console.log(bill_input)
    // if(bill_input === ""){
    //     tipAmount.innerHTML = "0.00"
    // }else{
    //     tipAmount.innerHTML = bill_input
    // }
    // event.target.value = thousandOperator(removeComma(bill_input))
})