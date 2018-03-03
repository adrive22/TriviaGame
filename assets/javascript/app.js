$(document).ready(function() {

var timer =15;
var currentQuestion=0;
var choices = [];
var userGuess=0;
var correctAnswer=0;



function startGame(){
	$(".question").hide()
	$(".answer").hide()
	$(".tryagain").hide()
	$(".lion").hide()
	$(".nirvana").hide()
	$(".sky").hide()
	$(".endMessage").hide()
	$(".winScore").hide()
	$(".loseScore").hide()


	$(".startBtn").on("click",function(){
		game();
		$(".startBtn").hide();
		$(".sky").show()
		timer=15
		var timerCount = setInterval(countdown,1000)
			function countdown(){
			$(".timer").html(timer--);	
			if(timer===-1){			
				clearInterval(timerCount);
				$(".tryagain").show();
				$(".endMessage").show();
				$(".winScore").show();
				$(".loseScore").show();
				$(".lion").hide();
				
			}
		}
		
	})


function game(){
var wins=0
var losses=0



$(".sky").on("click",function(){

	$(".sky").hide();
	$(".nirvana").show();
	console.log(this.value);
	if (this.value==="blue"){
		wins++;
		console.log(wins);
	}

	else{
		losses++;
	}
	$(".winScore").html("Correct:"+wins);
	$(".loseScore").html("Wrong:"+losses);

})

$(".nirvana").on("click",function(){
	$(".nirvana").hide();
	$(".lion").show();
		console.log(this.value);
	if (this.value==="it's less dangerous"){
		wins++;
		console.log(wins);
	}

	else{
		losses++;
	}
	$(".winScore").html("Correct:"+wins);
	$(".loseScore").html("Wrong:"+losses);

})
$(".lion").on("click",function(){
	$(".lion").hide()
		console.log(this.value);
	if (this.value==="it's the wheel of fortune"){
		wins++;
	}

	else{
		losses++;
	}
	$(".winScore").html("Correct:"+wins);
	$(".loseScore").html("Wrong:"+losses);

})

}

	
}





































startGame()


})