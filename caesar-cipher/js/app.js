var phrase = prompt("Enter the phrase you want to cipher: ").toUpperCase();


var cipher = function(str, shift){
  // Creating an empty array where we will save the cipher phrase
  var cipherPhrase = [];
  // We are iterating over the string to apply the forumalae 
  for (var i = 0; i < str.length; i++){
    /*In order to cipher the phrase we must found out the ascii code of the var - 65 (A in ascii code) + 33, which is our shift
      then we get the mod 26, which is the number of letter the alphabet has and we add 65  */
      var cipherAscii = ((str.charCodeAt(i) - 65 + shift) % 26 + 65);
      //Avoiding characters that are not letters
      if(cipherAscii > 65 && cipherAscii <= 90){
        //Convert the ascii code to a letter
        var cipherLetter = String.fromCharCode(cipherAscii);
        //Add the cipherLetter to the empty array we declare at the beggining
        cipherPhrase.push(cipherLetter);
        // In case character detected is not a letter we just skip it.
      }else{
        continue;
      }
  }
  return cipherPhrase.join('');
}

var cipherPhrase = cipher(phrase, 33);

var decipher = function(cipherPhrase, shift){
  var decipherPhrase = [];
  for(var i = 0; i < cipherPhrase.length; i++){
    var decipherAscii = ((cipherPhrase.charCodeAt(i) + 65 - shift) % 26 + 65);
    if(decipherAscii === 84){
      continue;
    }else{
      var decipherLetter = String.fromCharCode(decipherAscii);
      decipherPhrase.push(decipherLetter)
    }
  }
  return decipherPhrase.join('');
}

var phrase = prompt("Enter the phrase you want to cipher: ").toUpperCase();

if(phrase.length === 0 || Number.parseInt(phrase)){
  alert("You must entered a phrase. Remember numbers are not accepted");
}else{
  document.write(cipherPhrase + '<br/>');
  document.write(decipher(cipherPhrase, 33));
}



