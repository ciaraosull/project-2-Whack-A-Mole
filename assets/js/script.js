
//Add event listener DOM load before running game- code to be executed when page has finished loading

//Add event listener added to buttons elements - code to be executed when user clicks buttons



const hole = document.getElementsByClassName("hole");

//console.log(hole.length); //6 because 6 holes in node so far

//let randomHole = Math.floor(Math.random() * hole.length);
//console.log(randomHole); //random number between 0-5

/**
 * function randomHole to get random DOM element of “holes” &
 * generate random number between the lenght of holes. 
 */

//using hole.lenght so can add/remove holes in future without changing code
function randomHole(hole) {
    let x = Math.floor(Math.random() * hole.length); // x stands for the random hole number 0-5
    let allHoles = hole[x];
//  console.log(allHoles); //tested and random hole generated each time!
    return(allHoles);
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
    randHole.classList.add("up"); //take the randHole variable and assign that the class "up".  
    //setTimeOut to remove the class "up" after the random time generated has passed
    setTimeout(function() {
        randHole.classList.remove("up");
        peek(); //to keep moles popping up and down until time is over
    }, randTime);

}




/**
 * function scoreboard to calculate the
 * score increasing on every successful hit of mole
 */

/**
 * function timer & when timer is up stop game
 */
