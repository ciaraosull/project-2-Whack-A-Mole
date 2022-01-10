//Add event listener DOM load before running game- code to be executed when page has finished loading

//Add event listener added to buttons elements - code to be executed when user clicks buttons



const hole = document.getElementsByClassName("hole");
let gameOver = false;

//console.log(hole.length); //6 because 6 holes in node so far
//let randomHole = Math.floor(Math.random() * hole.length);
//console.log(randomHole); //random number between 0-5

/**
 * function randomHole to get random DOM element of “holes” &
 * generate random number between the lenght of holes. 
 */
function randomHole(hole) {
    let x = Math.floor(Math.random() * hole.length); //using hole.lenght so can add/remove holes in future without changing code
    let allHoles = hole[x]; // x stands for the random hole number 0-5 generated above
    //  console.log(allHoles); //tested and random hole generated each time!
    return (allHoles);
}

/**
 * function randomTimeBetweenPeek to calculate
 * a random amount of time between the moles peeking up.
 */
function randomTimeBetweenPeek(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
//console.log(randomTimeBetweenPeek(min, max)); //tested & random whole number generated each time!


/**
 * function peek for getting moles to pop up out of a random hole 
 * for a random amount of time and then disappear back
 * into hole
 */
function peek() {
    let randTime = randomTimeBetweenPeek(500, 1500); //use the random time from above with .5-1.5 secs
    let randHole = randomHole(hole);
    //  console.log(randomTime, randHole); //log to console and random hole selected at random time between 1-3secs (yay!)
    randHole.classList.add("up"); //take the randHole variable and assign it the class "up".  
    setTimeout(function () {
        randHole.classList.remove("up"); //to remove the class "up" after the random time generated has passed
        if (gameOver === false) { //when timer is running (while gameOver is false) to keep running peek
            peek(); //to keep moles popping up and down until time is over
            document.getElementById("playButton").disabled = true; //to disable play button once game starts
        }
    }, randTime); //time between moles peeking is random
}

/**
 * function onclick of play button
 */
function playGame() {
    gameOver = false; //to reset game on start
    peek();
    peek(); //running twice makes moles pop up in several locations at same time so harder
    setTimeout(function () {
        gameOver = true; //set game over for when time runs out
        document.getElementById("playButton").disabled = false; //to enable play button again once game over
    }, 20000); //set gameOver to true here after 20secs, then if statement in function peek() will stop running peek
}


function timeLeft(i) {
    let timeUp = setInterval(function() {
        document.getElementById("timer").innerHTML = i;
        i--;
        if (i === -1) { 
        clearInterval(timeUp)
    }
    }, 1000);

    
}
    


/**
 * function mole hit on click
 */


/**
 * function scoreboard to calculate the
 * score increasing on every successful hit of mole
 */