$(document).ready(function() {

var timer =0;
var currentQuestion=0;
var choices = [];
var userGuess=0;
var correctAnswer=0;
var wins=0;
var losses=0;






var triviaQuestions = [{
	question:"I came in like a wrecking ball! I__________________",
	choices:["I never hit so hard in love","I never want to be in love","I never want to break your heart","I just want a big ole hug"],
	correctAnswer:"I never hit so hard in love",
}, {
	question:"Hey Jude don't______________",
	choices:["don't you get sad","don't make it bad","don't you get by?","don't roll your eyes"],
	correctAnswer:"don't make it bad",
}, {
	question:"In the circle of life, _______________",
	choices:["it's all up in the air","it's the wheel of fortune","it's now or never", "it's light over darkness"],
	correctAnswer:"it's the wheel of fortune",
	
}];


//$('.startBtn').on('click', function(){
//	$(this).hide();
//	newGame();
//});

//$('.tryAgain').on('click', function(){
//	$(this).hide();
//	newGame();
//});


function startGame(){
	$(".question").hide()
	$(".answer").hide()
	$(".tryagain").hide()

	$(".startBtn").on("click",function(){
		$(".startBtn").hide();
		$(".question").show()
		$(".answer").show()
		newQuestion();

	})


}
startGame()




function newQuestion(){

	//adding 1 to var currentQuestion
	currentQuestion++
	//inserting the currentQuestion number to pull question umber from triviaQuestions array.
	//inserting the question pulled into question div in the html
	$(".question").html(triviaQuestions[currentQuestion].question);
	//creating a variable to hold the selected question
	var selectedQuestion = triviaQuestions[currentQuestion];
	
	console.log(selectedQuestion);
	//creating a for loop to go through the answer choices in the selected question. 
	for( var i = 0; i < selectedQuestion.choices.length; i++ ){
	//creating a variable to hold each choice
		var currentQuestionChoice = selectedQuestion.choices[i];
	//asigning the answer buttons and making that a variable (currentElement IS the button)
		var currentElement = $("#answer" + (i + 1));
	//putting the html into the buttons
		currentElement.html(currentQuestionChoice);
	//creating an attribute for the button called "data-choice" and assigning it to be the variable currentQuestionChoice;
		currentElement.attr("data-choice", currentQuestionChoice);
	}
}

function userAnswer(){
	//creating an function for when any of the ".answer" buttons are clicked.
	$(".answer").off("click").on("click",function(){
		//creating a variable and assigning it to pull the "data-choice" attribue, which will give us the currentQuestionChoice text
		var questionValue = $(this).data("choice");
	
		console.log(questionValue);

		//comparing the guess the user selected with the correct answer
		if(questionValue===triviaQuestions[currentQuestion].correctAnswer){
		wins++;
		$(".winScore").html(wins);
		console.log(wins);
	}

		else{
		losses++;
		$(".loseScore").html(losses);
		console.log(losses);
		}
	newQuestion();
	
	})
	
	
	
}

console.log(userGuess)




//console.log(userGuess)



//console.log(userGuess);


//if(this.userGuess === (triviaQuestions[currentQuestion].correctAnswer)){
//	alert("correct!");
//}

	



newQuestion()
userAnswer()








})



        


