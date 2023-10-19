
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


function convert(value1,value2,unit1,unit2){
    let result = `${inputEl.value*value1} ${unit1} = ${(inputEl.value*value2).toFixed(3)} ${unit2} | ${inputEl.value/value1} ${unit2} = ${(inputEl.value/value2).toFixed(3)} ${unit1}`
    
    return result
}

convertBtn.addEventListener("click", function(){
    lengthEl.textContent = convert(1,3.281,"Meters","Feets")
    volumeEl.textContent = convert(1,0.264,"Liters","Gallons")
    massEl.textContent = convert(1,2.204,"Kilos","Pounds")
})
