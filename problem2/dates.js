function dateToday() { 

	var now = new Date();
	var str = document.getElementById("Now").getAttribute("name");
        document.getElementById("when").textContent =str + " ";
	document.getElementById("output").value = now.toString();
}


function dateYesterday() {

	var yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
        var str = document.getElementById("Yesterday").getAttribute("name");
        document.getElementById("when").textContent =str + " ";
	document.getElementById("output").value = yesterday.toString();
}


function dateTenYearsAgo() {

	var tya = new Date();
	tya.setFullYear(tya.getFullYear() - 10);					var str = document.getElementById("Ten Years Ago").getAttribute("name");
        document.getElementById("when").textContent =str + " ";
	document.getElementById("output").value = tya.toString();
}


function dateInOneWeek() { 

	var iow = new Date();
	iow.setDate(iow.getDate() + 7);
	var str = document.getElementById("In One Week").getAttribute("name");
	document.getElementById("when").textContent =str + " ";
	document.getElementById("output").value = iow.toString();

}
