
//defining an object and assigning to the variable view
var view={
  displayMessage:function(msg){
    var messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;

  },

  /*below are two methods displayHit & displayMiss, that takes
  the location of a hit or miss & updates to the correct element*/

  displayHit:function(location){
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
    //will add ship image if player guesses hit
  },
  displayMiss:function(location){
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
    //will add ship image if player guesses miss
    }
};

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Tap tap, is this thing on?");


var model={
  boardSize:7,
  numShips:3,
  shipLength:3,
  shipsSunk:0,

  ships:[{locations:["06", "16", "26"], hits:["", "", ""]},
         {locations:["24", "34", "44"], hits:["", "", ""]},
         {locations:["10", "11", "12"], hits:["", "",""]}],
         /*the array of ship objects that each store the
         locations & hits of one of the three ships*/


fire: function(guess){
  for (var i = 0; i < this.numShips; i++){
    //stepping through each ship
    var ship = this.ships[i];
    var locations = ship.locations;
    //accessing the ship's set of locations
    var index = locations.indexOf(guess);
    //search for an array for a matching value and returns the index of the value
    if (index >=0){
      ship.hits[index] = "hit";
      return true;
      //we have a hit!!
    }
  }
  return false;
  //otherwise its a miss!!
}

};
