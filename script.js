//declare variables

var location1=3;
var location2=4;
var location3=5;

var guess;

var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk === false){
  guess = prompt("Ready, aim, fire! (enter a number from 1-6):");

  if (guess < 1 || guess > 6){
    alert ("Please enter a number between 1-6");
  }else{
    guesses = guesses +1;

    if(guess == location1 || guess == location2 || guess == location3){
  hits=hits +1;
  alert("HIT");
}else{
  alert("MISS!");
}
      if(hits === 3){
        isSunk = true;
      alert("You sank my ship!");

}


    }

}

var stats = "You took " + guesses + " guesses to sink the battleship, "
+ "which means your shooting accuracy was ( 3 / " + guesses + " ).";
alert(stats);