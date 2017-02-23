function isleap(){
	
	var input = document.getElementById("input").value;

	if( !isNaN(input) && input.length == 4){
		if(input % 4 ==0){
			if(input % 100 == 0){
				if(input % 400 == 0)
					document.getElementById("result").value += input + " is a leap year\n";
				else
					document.getElementById("result").value += input + " is not a leap year\n";
		}
			else
                         document.getElementById("result").value += input+ " is a leap year\n";

	}
		else
			document.getElementById("result").value += input + " is  not a leap year\n";
}
	else
		document.getElementById("result").value += "THE ENTRY IS INVALID\n"
}
