function calculateGrades() { 

	var assignments = getHwAverage();
	var project = document.getElementById("project").value;
	var quizzes = getQuizAverage();
	var participation = document.getElementById("participation").value;
	var finalExam = document.getElementById("final").value;
	var raise = document.getElementById("raise").value;
	var courseGrade = assignments*0.2 + project*0.08 + quizzes*0.42 + participation*0.05 + finalExam*0.25;
	var raisedGrade = courseGrade + (100 - courseGrade) * (participation/100) * (raise/100);


	document.getElementById("hwAverage").value = assignments;
	document.getElementById("quizzesAverage").value = quizzes;
	document.getElementById("courseAverage").value = courseGrade;
	document.getElementById("raisedGrade").value = raisedGrade;

}



function getHwAverage() {

	var assignments = extractGrades("assignments");
	if(assignments.length<4 || assignments.length>6)
		return 0;
	
	return assignments.reduce(add, 0) / assignments.length;

}


function getQuizAverage() { 

	var quizzes = extractGrades("quizzes");
	if(quizzes.length!=3)
		return 0;
	
	for (var i=0; i<quizzes.length; i++) {

		quizzes[i] *= 14;
	}

	
	var average = quizzes.reduce(add, 0) / 42;

	return average;

}


function extractGrades(id) { 


	var rawGrades = document.getElementById(id).value.split(" ");
	var grades = [];

	for (var i=0; i<rawGrades.length; i++) {

		var grade = parseInt(rawGrades[i]);
		grades.push(grade);
	}

	return grades;

}


function add(a, b) {

	return a + b;
}
