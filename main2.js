


function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var correct = 0;
		if (question1 == "koko") {
			correct++;
		}
		if (question2 == "nyama") {
			correct++;
		}
		if(question3 == "Walungu"){
			correct++;
		}
		if (question4 == "kashovu"){
			correct++;
		}
		
	var messages = ["Okozirhe bwenene!", "nt' oburhe!", "ociseze mwanar","Rondera okuburanzi!!!"];
	var pictures = ["img/tenor.gif", "img/shame.gif","img/gif5.gif" ,"img/shame.gif"];
	var range;
		if (correct < 1){
			range = 1;
		}
		if (correct > 1 && correct < 3){
			range = 2;
		}
		if (correct > 2){
			range = 0;
		}
		if (correct < 1){
			range = 3;
		}
		if (correct > 1){
			range = 3;
		}


			
		
document.getElementById("after_submit").style.visibility = "visible";
	
document.getElementById("message").innerHTML = messages[range];
	
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("picture").src = pictures[range];
}