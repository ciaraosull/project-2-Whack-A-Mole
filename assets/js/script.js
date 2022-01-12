//Declare variables
const hole = document.getElementsByClassName("hole");
//const mole = document.getElementsByClassName("mole");
const score = document.getElementById("molesHit");
let gameOver = false;
let moles = document.getElementsByClassName("mole");

//Add event listener DOM load before running game- code to be executed when page has finished loading
//Add event listener added to button elements - code to be executed when user clicks button

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("playButton");
    
    button.addEventListener("click", function() {
        playGame() //runs the playGame function below when user clicks the play button
    });
})

    

/**
 * function randomHole to get random DOM element of “holes” &
 * generate random number between the lenght of holes. 
 */
function randomHole(hole) {
    let x = Math.floor(Math.random() * hole.length); //using hole.lenght so can add/remove holes in future without changing code
    let allHoles = hole[x]; // x stands for the random hole number 0-5 generated above
    return (allHoles);
}

/**
 * function randomTimeBetweenPeek to calculate
 * a random amount of time between the moles peeking up.
 */
function randomTimeBetweenPeek(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

/**
 * function peek for getting moles to pop up out of a random hole 
 * for a random amount of time and then disappear back
 * into hole
 */
function peek() {
    let randTime = randomTimeBetweenPeek(500, 1500); //use the random time from above & set between .5-1.5 secs
    let randHole = randomHole(hole);
    randHole.classList.add("up"); //take the randHole variable and assign it the class "up" to show moles when peek() is run  
    setTimeout(function () {
        randHole.classList.remove("up"); //to remove the class "up" after the random time generated has passed
        if (gameOver === false) { //when timer is running (while gameOver is false) to keep running peek
            peek(); //to keep moles popping up and down until time is over
            document.getElementById("playButton").disabled = true; //to disable play button once game starts to avoid user clicking and setting off peek() multiple times
        }
    }, randTime); //time between moles peeking is random (as above)
}

/**
 * function onclick of play button
 */
function playGame() {
    gameOver = false; //to reset game on start
    document.getElementById("time-up-alert").style.visibility = "hidden"; //hide time-up message on game start & play again
    document.getElementById("time-left").style.visibility = "visible"; //show countdown timer on game start & play again
    timeLeft(20); //to pass 20 through the timer function below called timeLeft()
    peek();
    peek(); //running twice makes moles pop up in several locations at same time so harder
    setTimeout(function () {
        gameOver = true; //set game over for when time runs out
        document.getElementById("playButton").disabled = false; //to enable play (or play again) button again once game over
    }, 20000); //set gameOver to true here after 20secs, then if statement in function peek() will stop running peek
}


function timeLeft(i) {
    let countDown = setInterval(function() { //create a variable called countDown and take 1 away each time until 0
        document.getElementById("timer").innerHTML = i;//access the timer html text to display the number counting down
        i--;
        if (i === -1) {
            clearInterval(countDown) //if statement for what to do when timer gets to 0 and gmae is over
            document.getElementById("time-up-alert").style.visibility = "visible"; //hide time-up message on game start & play again
            document.getElementById("time-left").style.visibility = "hidden"; //show countdown timer on game start & play again
            document.getElementById("playButton-text").innerHTML = "Play Again";//change the Play button text to play again
        }
    }, 1000);//counts down the number 1 second in the setInterval for countDown variable
}

/**
 * function mole hit on click
 */

function hitMoles() {
     
     moles.forEach(mole => {
        mole.addEventListener("click", hitMoles)
        alert("hit");
        
    });
}





/**
 * function scoreboard to calculate the
 * score increasing on every successful hit of mole
 */