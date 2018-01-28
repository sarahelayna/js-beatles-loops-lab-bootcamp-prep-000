function theBeatlesPlay(musicians, instruments) {
var theBeatlesArray = [];
for (var i = 0; i < musicians.length; i++) {
  theBeatlesArray.push(musicians[i] + " plays " + instruments[i]);
}
return theBeatlesArray;
}

function johnLennonFacts (facts) {
  var facts = [];
  while (i < facts.length) {
    facts[i] += facts[i] + " !!! ";
    i++;
  }
  return facts;
}
