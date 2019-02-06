function dwarfRollCall(names) {
  const arr = [];
  for (let i = names.length *.5; i < names.length; i++) {
    arr.push(`${i+1}. ${names[i]} `);
  } 

  return arr.join('')
}

function summonCaptainPlanet(planeteerCalls) {
  var arr = [];
 planeteerCalls.forEach(planeteerCall =>{
   arr.push(`${planeteerCall.toUpperCase()}!`);
 });
 return arr;
}

function longPlaneteerCalls(calls) {
  return calls.some(call => call.length > 4);
}

function findTheCheese(foods) {
  var goodCheese = foods.find(food => food === 'gouda' || food === 'cheddar' || food === 'camembert');
  if (goodCheese === undefined) {
    return `no cheese!`;
  } else {
    return goodCheese;
  }
}
function wordsWithB(words) {
  return words.filter(bwords => bwords.startsWith("b"))
}



