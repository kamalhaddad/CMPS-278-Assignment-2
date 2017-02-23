flag = true;
counter = 0;
randomNumber = -1;
function rand(){
	

	if(flag == true){
		
		 randomNumber = Math.floor((Math.random() * 20)+1);
		flag = false;
	}

	var guess = document.getElementById("input").value;

	if(guess == randomNumber){
		flag = true;
		counter++;
		alert("Good Work, the number is "+ randomNumber +" and you guessed it after " + counter +" trials");
		counter = 0;
		}

	else{
		if(guess<randomNumber)
			document.getElementById("input").value = "The number is larger";
		else if(guess>randomNumber)
			document.getElementById("input").value = "The number is smaller";
			counter++;	
		}

	if(counter == 6){
		counter  = 0;
		flag = true;
		alert("Bad Luck, the number was "+ randomNumber + " and it seems		 you don't know binary search.");
		document.getElementById("input").value = "";
		}
		
}
