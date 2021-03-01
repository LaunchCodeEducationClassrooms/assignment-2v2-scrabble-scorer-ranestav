// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word;
function initialPrompt() {
  console.log("Let's play some scrabble!");
  word = input.question('Enter a word to score: ');
  return word;
};

let simpleScore = function(word) {
  let score = 0;
  word = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    score ++;
  }
  return score;
};
let vowelBonusScore = function(word) {
  word = word.toUpperCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == 'A' || word[i] == 'E' || word[i] == 'I' || word[i] == 'O' || word[i] == 'U' ) {
      score += 3;
    } else {
      score ++;
    }
  }
  return score;
};
let scrabbleScore = function(word){
	word = word.toLowerCase();
	let letterPoints = 0;
  for (let i = 0; i < word.length; i++) {
    letterPoints += newPointStructure[word[i]]
  }
  console.log(`Score for '${word}': ${letterPoints}`);
  return letterPoints;
};

const scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth one point.',
    scoringFunction: simpleScore
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore
  },
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoringFunction: scrabbleScore
  }
];

function scorerPrompt() {
  let choice = input.question('Please choose an algorithm.  Please input 0 for Simple Score, 1 for Bonus Vowels, or 2 for Scrabble: ');
  if (Number(choice) === 0) {
    console.log(`Score for '${word}': ${scoringAlgorithms[0].scoringFunction(word)}`);
  } else if (Number(choice) === 1) {
    console.log(`Score for '${word}': ${scoringAlgorithms[1].scoringFunction(word)}`);
  } else if (Number(choice) === 2) {
    console.log(`Score for '${word}': ${scoringAlgorithms[2].scoringFunction(word)}`);
  }
}

function transform(obj) {
  let newPointStructure = {};
  for (item in obj) {
    for (let i = 0; i < obj[item].length; i++) {
      newPointStructure[obj[item][i].toLowerCase()] = Number(item);
    }
  }
  return newPointStructure;
};
let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
}
runProgram();
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

