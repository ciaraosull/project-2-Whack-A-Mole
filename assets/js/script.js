
//event listener DOM load before running game- code to be executed when page has finished loading

//event listener added to buttons elements - code to be executed when user clicks buttons


//function randomHoles to get random DOM element of “holes”. 
//Then to generate a random number (0-2) of the 3 holes (holes.lenght) the moles peek out of each time.

let hole = document.getElementsByClassName("hole"); //try not make global variables - test only

console.log(hole.length); //3

let randomHole = Math.floor(Math.random() * hole.length);
console.log(randomHole); //random number between 0-3

//function randomHole(holes) {
//    let x = Math.floor(Math.random() * hole.length);
//    let hole = holes[x];
//    return hole;
//   }

 

/**
 * function peek for getting moles to pop up out of hole (in css .classList.add("up")) 
 * for certain amount of time and then disappear back
 * into hole (maybe make a random time each time this happens?)
 */
 
/**
 * function randomTimeBetweenPeek to calculate
 * a random amount of time between the moles peeking up.
 * Used Math.round to keep the time as whole number?
 */



/**
 * function scoreboard to calculate the
 * score increasing on every successful hit of mole
 */

/**
 * function timer & when timer is up stop game
 */
