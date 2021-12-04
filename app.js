
var values=document.querySelectorAll(".stock")
var button=document.querySelector(".calculate")
var output=document.querySelector(".output")

function calculateProfitorLoss(){
    var initialv=Number(values[0].value)
    var quantityv=Number(values[1].value)
    var currentv=Number(values[2].value)
    //console.log(Number(values[0].value),Number(values[1].value),Number(values[2].value))
    if(initialv > currentv){
        var loss=(initialv-currentv)*quantityv
        var lossPercentage=(loss/(initialv*quantityv))*100
        output.style.display="block"
        //output.style.background-color="white"
        output.style.color="red"
        output.innerText="You are in loss of Rs."+loss+" i.e "+lossPercentage+"%"
    }
    else{
        var profit=(currentv-initialv)*quantityv
        var profitPercentage=(profit/(initialv*quantityv))*100
        output.style.display="block"
        output.style.color="green"
        output.innerText="You are in profit of Rs."+profit+" i.e"+profitPercentage+"%"
    }
}

button.addEventListener("click",calculateProfitorLoss)
