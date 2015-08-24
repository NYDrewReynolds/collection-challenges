data = [
  ['Frank', 33],
  ['Stacy', 15],
  ['Juan', 24],
  ['Dom', 32],
  ['Steve', 24],
  ['Jill', 24]
];

// Level 1: Write code that'll output the names (and only the names) in order by ascending age
var asscAge = data.sort(function(pairOne,pairTwo){
  return pairOne[1] - pairTwo[1];
}).map(function(pair){
  return pair[0];
});

console.log("Asscending Age = " + asscAge);

// Level 2: Output the name with the age, like Juan (24)

var nameAndAge = data.sort(function(pairOne,pairTwo){
  return pairOne[1] - pairTwo[1];
}).map(function(pair){
  return pair[0] + " (" + pair[1] + ")";
});

console.log("Name (Age) = " + nameAndAge);

// Level 3: If there are multiple people tied with the same age, put them in alphabetical order

var sortedByAgeAndName = data.sort(function(pairOne,pairTwo){
  return pairOne[1] - pairTwo[1];
}).map(function(pair){
  return pair[0];
});

console.log("Sorted By Age & Name = " + sortedByAgeAndName);
// Level 4: Write code to automatically build a hash with the age as the key and an array of names as the value (all the people who are that age). e.g. {24 => ['Juan', 'Steve', 'Jill']...}
