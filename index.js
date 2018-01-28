function theBeatlesPlay (musicians, instruments) {
  var beatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesArray.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesArray;
}

function johnLennonFacts (facts) {
var i = 0;
  while (i < facts.length) {
    facts.push(" !!! ");
    i++;
  }
  return facts;
}
