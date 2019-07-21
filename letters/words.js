/*this is the database of all words that can be used in the game
var word1 = ['w', 'o', 'r','l', 'd'];
var word2 = ['h', 'e', 'l', 'l', 'o'];
var word3 = ['r', 'u', 's', 's','i','a','n'];
var word4 = ['p', 'a', 'i', 'n','f','u','l'];
var word5 = ['l', 'o', 'n', 'e','l','y'];
var word6 = ['m', 'o', 'l', 'o','t','o','v'];
var word7 = ['c', 'a', 'r', 'i','n','g'];
var word8 = ['c','u','p','c', 'a', 'k', 'e'];
var word9 = ['f', 'r', 'i', 'e','n', 'd'];
var word10 = ['s', 'p', 'e', 'e','d'];
var word11 = ['g', 'r', 'o', 'w','i', 'n', 'g'];
var word12 = ['n', 'u', 'm', 'b','e', 'r'];
var word13 = ['f', 'r', 'u', 'i','t'];
var word14 = ['p', 'r', 'i', 's','o', 'n', 'e','r'];
var word15 = ['h', 'i', 's', 't','o', 'r', 'y'];*/



var wordsFood = [
	'foodie',
	'drinking',
	'brownie',
	'cupcake',
	'meat',
	'salmon',
	'dinner',
	'dessert',
	'vegetables',
	'candy',
	'sweet',
	'bread',
	'honey',
	'brocoli',
	'salty',
	'lemon',
	'carrot',
	'jellybean',
	'cornflakes',
	'cheese',
	'milk',
	'sausage',
	'eggs',
	'pasta',
	'meatballs',
	'tomato'
];
var wordsAnimals = [
	'cow',
	'animals',
	'chicken',
	'dog',
	'catfish',
	'spider',
	'insect',
	'fly',
	'bird',
	'jellyfish',
	'shark',
	'whale',
	'falcon',
	'human',
	'turkey',
	'lion',
	'tiger',
	'leopard',
	'wolf'
];
var wordsLands = [
	'russia',
	'netherlands',
	'israel',
	'america',
	'canada',
	'brazil',
	'germany',
	'venezuela',
	'colombia',
	'france',
	'england',
	'britain',
	'estonia',
	'egypte',
	'libya',
	'spain',
	'portugal',
	'mexico',
	'congo',
	'ireland',
	'china',
	'japan',
	'korea',
	'vietnam'
];

for (var i = wordsFood.length - 1; i >= 0; i--) {
	wordsFood[i].split('');
}
for (var i = wordsAnimals.length - 1; i >= 0; i--) {
	wordsAnimals[i].split('');
}
for (var i = wordsLands.length - 1; i >= 0; i--) {
	wordsLands[i].split('');
}

var randomNumber=null;
var chosenWord=null;
var missingLetterNum=null;
var missingLetter=null;
var splicedWord;
var chosenLetters;
var lettersArray;
var random2;
var theme;
var mistakes;
var mistakesWord;

var lettersOG = [	
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
]

var letterB1 = document.createElement('button');
var letterB2 = document.createElement('button');
var letterB3 = document.createElement('button');
var letterB4 = document.createElement('button');
var letterB5 = document.createElement('button');
var letterB6 = document.createElement('button');
var letterB7 = document.createElement('button');
var letterB8 = document.createElement('button');
