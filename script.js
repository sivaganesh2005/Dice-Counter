let images = ["dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg"];

let dice=document.querySelectorAll("img");

function Roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        })
        let diceone=Math.floor(Math.random()*6);
        let dicetwo=Math.floor(Math.random()*6);
        document.querySelector("#dice1").setAttribute("src","/img/"+images[diceone]);
        document.querySelector("#dice2").setAttribute("src","/img/"+images[dicetwo]);
        document.querySelector("#total").innerHTML="Your Roll is "+((diceone+1)+(dicetwo+1));
        console.log(diceone,dicetwo);
    },1000);
}
Roll();