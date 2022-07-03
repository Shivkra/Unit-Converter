const inputEl=document.getElementById("input")
const btnEl=document.getElementById("btn")
const paraOneEl=document.getElementById("paraOne")
const paraTwoEl=document.getElementById("paraTwo")
const paraThreeEl=document.getElementById("paraThree")

const meterToFeet =  3.281
const feetToMeter = 0.304
const literToGallon = 0.264
const gallonToLiter = 3.785
const kiloToPound =  2.204
const poundToKilo = 0.453

btnEl.addEventListener("click",function(){
  let inputValue=inputEl.value
  paraOneEl.textContent=`${inputValue} meters = ${inputValue * meterToFeet} feet | ${inputValue} feet = ${inputValue * feetToMeter} meters`
  paraTwoEl.textContent=`${inputValue} liters = ${inputValue * literToGallon} gallons | ${inputValue} gallons = ${inputValue * gallonToLiter} liters`
  paraThreeEl.textContent=`${inputValue} kilos = ${inputValue * kiloToPound} pounds | ${inputValue} pounds = ${inputValue * poundToKilo} kilos`
})