$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19);
//the randomizer formula (19-120)
$('#random').text(Random);
// connecting the randomizer formula with the HTML ID


// My crystal Generators 
var crystalNum1 = Math.floor(Math.random()*11+1);
var crystalNum2 = Math.floor(Math.random()*11+1);
var crystalNum3 = Math.floor(Math.random()*11+1);
var crystalNum4 = Math.floor(Math.random()*11+1);
// the Random number generator for the Crystals

var playerTotal = 0;
var win = 0;
var lost = 0;
// counters for the stats

$('#statWins').text(win);
$('#statLosses').text(lost);
// connecting the counters for the wins and losses to the HTML IDs

function reset() {
    Random = Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#random').text(Random);
    crystalNum1 = Math.floor(Math.random()*11+1);
    crystalNum2 = Math.floor(Math.random()*11+1);
    crystalNum3 = Math.floor(Math.random()*11+1);
    crystalNum4 = Math.floor(Math.random()*11+1);
    playerTotal = 0;
    $('#finalTotal').text(playerTotal);
    //resets the game and randomizes the crystals, cpu number, and resets score
}
function userWin(){
    alert("Winner!!")
    win++; // Counter
    $('#statWins').text(win); // converting to HTML
    reset(); // adds win to the user total, and calls back the reset function
}
function userLoss(){
    alert("You Lose");
    lost++; // Counter
    $("#statLosses").text(lost); // converting to HTML
    reset(); // reset game
}


// The Crystal Click Events

// Crystal 1
$("#one").on ("click", function(){
    playerTotal = playerTotal + crystalNum1; //formating the click with the random number for crystal 1
    console.log("Player Total = " + playerTotal);
    $("#finalTotal").text(playerTotal); // connecting the HTML
    // the conditions
    if (playerTotal == Random) { // if it equals the generated computer number
        userWin(); //calling win function 
    } 
    else if (playerTotal > Random){ // player total above random number
        userLoss(); // calls loser function
    }
})

// Crystal 2
$("#two").on ("click", function(){
    playerTotal = playerTotal + crystalNum2; //formating the click with the random number for crystal 2
    console.log("Player Total = " + playerTotal);
    $("#finalTotal").text(playerTotal); // connecting the HTML
    // the conditions
    if (playerTotal == Random) { // if it equals the generated computer number
        userWin(); //calling win function 
    } 
    else if (playerTotal > Random){ // player total above random number
        userLoss(); // calls loser function
    }
})

// Crystal 3
$("#three").on ("click", function(){
    playerTotal = playerTotal + crystalNum3; //formating the click with the random number for crystal 3
    console.log("Player Total = " + playerTotal);
    $("#finalTotal").text(playerTotal); // connecting the HTML
    // the conditions
    if (playerTotal == Random) { // if it equals the generated computer number
        userWin(); //calling win function 
    } 
    else if (playerTotal > Random){ // player total above random number
        userLoss(); // calls loser function
    }
})

// Crystal 4
$("#four").on ("click", function(){
    playerTotal = playerTotal + crystalNum4; //formating the click with the random number for crystal 4
    console.log("Player Total = " + playerTotal);
    $("#finalTotal").text(playerTotal); // connecting the HTML
    // the conditions
    if (playerTotal == Random) { // if it equals the generated computer number
        userWin(); //calling win function 
    } 
    else if (playerTotal > Random){ // player total above random number
        userLoss(); // calls loser function
    }
    });

});