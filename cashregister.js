const billAmount = document.querySelector("#bill-amount");
const givenAmount = document.querySelector("#given-amount");
const checkbtn = document.querySelector("#check-btn")
const displayResult = document.querySelector("#result")
const numberOfNotes = document.querySelectorAll(".noOfNotes");
const availableNotes = [2000 , 500 , 100 , 50 , 20 , 10 , 5 , 1 ]
//console.log(givenAmount.value)
checkbtn.addEventListener("click",checkValidity);

function checkValidity(){
    hideMessage();
    if ( billAmount.value > 0)
    {
        if ( givenAmount.value >= billAmount.value){
            result("you have change left")
            const calculateChange = givenAmount.value - billAmount.value;
            displayAmount(calculateChange)
        }
        else{
            result("Do you wanna wash plates?..")
        }
    }else{
        result("give atleast right amount")
    }
}

function result(msg)
{
    displayResult.style.display="block";
    displayResult.innerText = msg;
}
function hideMessage(){
    displayResult.style.display = "none";
}
function displayAmount(calculateChange){
    for(let i = 0 ; i < availableNotes.length; i++)
    {
        const noOfNotes = Math.trunc(calculateChange / availableNotes[i]);
        calculateChange %= availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes;
    }
}