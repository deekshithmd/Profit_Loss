var initial=document.querySelector(".initial")
var quanity=document.querySelector(".quantity")
var current=document.querySelector(".current")
var button=document.querySelector(".calculate")
var output=document.querySelector(".output")

var initialv=Number(initial.value)
var quanityv=Number(quanity.value)
var currentv=Number(current.value)

function calculateProfitorLoss(){
    console.log(initialv)
    console.log(quanityv)
    console.log(currentv)
    if(initialv > currentv){
        var loss=(initialv-currentv)*quanityv
        var lossPercentage=(currentv/initialv)*100
        console.log("Loss : "+loss+"Percentage : "+lossPercentage)
    }
}

button.addEventListener("click",calculateProfitorLoss)