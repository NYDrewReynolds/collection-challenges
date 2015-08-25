scores = {
  "A":1, "B":3, "C":3, "D":2,
  "E":1, "F":4, "G":2, "H":4,
  "I":1, "J":8, "K":5, "L":1,
  "M":3, "N":1, "O":1, "P":3,
  "Q":10, "R":1, "S":1, "T":1,
  "U":1, "V":4, "W":4, "X":8,
  "Y":4, "Z":10
};

// Score every individual letter

word = ['H', 'E', 'L', 'L', 'O'];

var scoreEveryLetter = word.map(function(letter){
  return letter + " has the value " + scores[letter];
});

console.log("Score Every Letter = " + scoreEveryLetter);

// Split & Score a lowercase string

newWord = "hello";

var scoreString = newWord.split('').map(function(letter){
  return letter.toUpperCase() + " has the value " + scores[letter.toUpperCase()];
});

console.log("Split & Score String = " + scoreString);

// Split & Score Enter String

lastWord = "hello";

var findScores = lastWord.split('').map(function(letter){
  return scores[letter.toUpperCase()];
});

var scoreWord = findScores.reduce(function (total, number) {
  return total + number;
}, 0);

console.log("Score Entire Word = "+ lastWord + " has the total score of " + scoreWord);
