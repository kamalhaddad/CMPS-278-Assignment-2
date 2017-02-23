function isValid(){

	if(isCNN())
		document.getElementById("result").innerHTML += "Card Number "+ document.getElementById("input").value + " is valid. <br>";
	
	else
		document.getElementById("result").innerHTML += "Card Number "+ document.getElementById("input").value + " is not valid.<br>"; 	
	
}


function isCNN(){
	
	var sum = 0;
	var results = document.getElementById("input").value;
	var splitString = results.split("");
	var reverseArray = splitString.reverse();
	var reverseString = reverseArray.join("");
	var str = results.split('-', 4);
	
	if(results[4]!= '-'|| results[9]!='-' || results[14]!='-'|| results.length!= 19 || reverseString == results || results[results.length -1]%2 != 0)
		return false;
	
	for(var i = 0; i< results.length; i++){
		if(results[i] != '-' && isNaN(results[i]))
			return false;
		else
			sum +=results[i];	
	}

	if(sum <=16)
		return false;

	for(var i = 0; i< str.length;i++){
		if(str[i].length!=4)
			return false;
	
	}

	return true;

}
