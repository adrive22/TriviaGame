$(document).ready(function() {

//var timer = 
var currentQuestion=0
var choices = []
//ar userChoice=0
//var correctAnswer=0
//var choice=""










//var game={
//	question: "Miley Cyrus sings she 'Came in like a wrecking ball! I ________________'"
//	answers:("I never hit so hard in love", "I never want to be in love", "I just want to stay in love", "I just want a big ole hug")
//	correct: [0]
//}


//function startGame(){
//	$(".question").text(game.question);
	
//}

//startGame()

var triviaQuestions = [{
	question:"I came in like a wrecking ball! I__________________",
	choices:["I never hit so hard in love","I never want to be in love","I never want to break your heart","I just want a big ole hug"],
	correctAnswer:1,
}, {
	question:"Hey Jude don't______________",
	choices:["don't you get sad","don't make it bad","don't you get by?","don't roll your eyes"],
	correctAnswer:2,
}];

console.log(triviaQuestions[1])
console.log(triviaQuestions[1].choices[0])





//$('.startBtn').on('click', function(){
//	$(this).hide();
//	newGame();
//});

//$('.tryAgain').on('click', function(){
//	$(this).hide();
//	newGame();
//});

//function newGame(){
//	currentQuestion = 0;
//	correctAnswer = 0;
//	incorrectAnswer = 0;
//	playGame();
//}




function newQuestion(){
	currentQuestion++
	$(".question").html(triviaQuestions[currentQuestion].question);


	$("#answer1").html(triviaQuestions[currentQuestion].choices[0]);
	$("#answer2").html(triviaQuestions[currentQuestion].choices[1]);
	$("#answer3").html(triviaQuestions[currentQuestion].choices[2]);
	$("#answer4").html(triviaQuestions[currentQuestion].choices[3]);
	
}


$("#answer1").on("click", function(){
		var userGuess = 1
		console.log(userGuess);
})
	
$("#answer2").on("click", function(){
		var userGuess = 2
		console.log(userGuess);
})
$("#answer3").on("click", function(){
		var userGuess = 3
		console.log(userGuess);
})
$("#answer4").on("click", function(){
		console.log(this)
		var userGuess = 4
		console.log(userGuess);
})

	



newQuestion()








})



        


