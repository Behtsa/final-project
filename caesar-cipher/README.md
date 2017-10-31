# caesar-cipher

Create a web that asks, through a ```prompt ()```, a phrase to the user and return the same encrypted message according to the Caesar Cipher algorithm with the scroll parameter of 33 spaces to the right.

## pseudocode

1. Ask through a ```prompt ()``` a phrase to the User
2. Evaluate if input is not null or a number.
3. For invalid entries send an alert 
4. Otherwise, convert this phrase to UpperCase ( in order to work just wih capital letters)
5. Then call our both important functions  
	-```cipher(str, shift){	}```
	-```decipher(str, shift){	}```
6. In the cipher function we will have 2 parameters `(str, shift)` 
7. Creating an empty array where we will save the cipher phrase `var cipherPhrase = [];`
8. Iterate through the str with its length as the limit
9. In order to cipher the phrase we must found out the ascii code of the var - 65 (A in ascii code) + 33, which is our shift then we get the mod 26, which is the number of letter the alphabet has and we add 65.
10. If Ascii code of the var correspondes to a character which is not a letter we skip it
11. Otherwise, we transform that Ascii code to a letter
12. Push that cipher letter to the empty array we declared at the beginning.
13. Return array
14. Use returned value of cipher function as a parameter of the decipher function.
15. We apply same method as in the cipher f() but in reverse. 
16. We show the cipher and decipher phrase on the browser. 
![Diagram](http://E:\laboratoria\sprint1\final-project\caesar-cipher)


