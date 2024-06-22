let score = document.getElementById("home-box")
let guestTotal = document.getElementById("guest-box")

let homeScore = 0
let guestScore= 0


function add1() {
   homeScore +=1
   score.textContent= homeScore
   winnerCalculation(homeScore, guestScore);

}

function add2() {
   homeScore +=2
   score.textContent= homeScore
      winnerCalculation(homeScore, guestScore);

}


function add3() {
   homeScore +=3
   score.textContent= homeScore
      winnerCalculation(homeScore, guestScore);

}



function add11() {
   guestScore +=1
   guestTotal.textContent= guestScore
      winnerCalculation(homeScore, guestScore);

}

function add22() {
   guestScore +=2
   guestTotal.textContent= guestScore
      winnerCalculation(homeScore, guestScore);

}


function add33() {
    guestScore +=3
    guestTotal.textContent= guestScore
       winnerCalculation(homeScore, guestScore);

}

console.log(homeScore, guestScore)

let scoreBoard = document.getElementById("winner")
function winnerCalculation (homeScore, guestScore) {
if(homeScore > guestScore) {
   scoreBoard.textContent="Home is leading"
}
else if (homeScore < guestScore) {
   scoreBoard.textContent="Guest is leading"
}
else {
   scoreBoard.textContent= "Tie Game"
}

 }
 
