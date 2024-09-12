let checkbox = document.getElementById("checkbox")
let mpesa = document.getElementById("mpesa")
let mastercard = document.getElementById("mastercard")
let visa = document.getElementById("visa")
let Paypal = document.getElementById("Paypal")
let submit = document.getElementById("submit")
let preresult = document.getElementById("preresult")
let result = document.getElementById("result")

submit.onclick = function(){
    if(checkbox.checked){
        preresult.textContent = `You have Subscribed,you can proceed`
        preresult.style.color ="green"
    }
    else {
        preresult.textContent = `! You are not Subscribed, you cannot proceed`;
        preresult.style.color = "red";  
    }
    

    if(mpesa.checked){
        result.textContent = `You have Selected M-pesa as form of payment`;
    }
    else if(mastercard.checked){
        result.textContent = `You have Selected Mastercard as form of payment`;
    }
    else if(visa.checked){
        result.textContent = `You have Selected Visa as form of payment`;
    }
    else if(Paypal.checked){
        result.textContent = `You have Selected Paypal as form of payment`;
    }
    else{
        result.textContent = `You have not Selected any payment method`
        result.style.color = "red"
    }
}
