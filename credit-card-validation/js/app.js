var isValidCard = function(cc){
	for (var i = 0; i >= 16; i++) {
		if((i + 1) % 2 != 0){
			var division = cc[ i + 1 ] * 2;
			if(division > 9){
				var sum = division[0] + division[1];
				console.log(sum);
			}
		}

	}
}

var creditCard = prompt("Enter your credit card number: ");

if(creditCard.length == 0){
	alert("You must entered your credit card number");
} else if(creditCard.length > 16) {
	alert("Only 16 digits are valid");
} else if(creditCard.length == 16){
	var creditCardInt = parseInt(creditCard);
	console.log(isValidCard(creditCardInt));
}
