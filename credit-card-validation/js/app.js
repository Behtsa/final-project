var isValidCard = function(cc){
	var arrayCc = Array.from(cc);
	var arrayCcReversed = arrayCc.reverse();
	return arrayCcReversed;
}

var creditCard = prompt('Enter your Credit Card number');

console.log(isValidCard(creditCard));


