function dwarfRollCall(dwarves) {
const arr = [];
    for (let i = 0; i < dwarves.length; i++) {
     arr.push(`${i+1}. ${dwarves[i]} `); }
     return arr.join('')
}

function summonCaptainPlanet(planeteerCalls) { 
const arr = [];
 for (let i = 0; i < planeteerCalls.length; i++) {
  arr.push(`${planeteerCalls[i].toUpperCase()}!`)}
  return arr
}

function longPlaneteerCalls(words) {
var longCalls = words.filter(word => word.length > 4);
if (longCalls.length > 0) {
  return true;
} else {
  return false
}
}

function findTheCheese (foods){
const cheese = [];

var goodCheese = foods.find(food => food === ('cheddar' || 'gouda' || 'camembert')); 

if (goodCheese === undefined) {
return 'no cheese!'
} else { 
  return goodCheese
}
}

