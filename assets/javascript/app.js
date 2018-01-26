$(document).ready(function() {
	startGame();
	// reset();
});


var remainingTime;
var intervalId;
var correctAnswers = 0;
var numQuestions = 10;
var mainContainer = $(".mainContainer")
var score;
var clockingRunning = false;

			
	function startGame() {
		// remainingTime = 5;
		$("#start").show();
		mainContainer.hide();
		console.log("somehijkdhkl");
		$("#start").on("click", function() {
			remainingTime = 5;

			startTimer();
			$(this).hide();
			mainContainer.show();
		});

	};

	function startTimer() {
		if (!clockingRunning) {
			intervalId = setInterval(decrement, 1000);
			clockingRunning = true;
		}
	};

	function decrement() {
		$("#remainingTime").html("<h2>You have " + remainingTime + " seconds left!</h2>");
		// debugger;
		remainingTime--;

		
		console.log(remainingTime);

		if (remainingTime === 0) {
			clockingRunning = false;
			clearInterval(intervalId);
			timesUp();

			// $("#timesUp").html("<h2>Time is up!!</h2>");	
		}
	};

	function timesUp() {
		
		
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();

		if (Q1 === "Theo LeSeig") {
			correctAnswers++;
		} 
		if (Q2 === "Theodor Geisel") {
			correctAnswers++;
		}
		if (Q3 === "The fish") {
			correctAnswers++;
		} 
		if (Q4 === "Kites") {
			correctAnswers++;
		}
		if (Q5 === "Sam I am") {
			correctAnswers++;
		}
		if (Q6 === "false") {
			correctAnswers++;
		}
		if (Q7 === "Preserving the Environment") {
			correctAnswers++;
		}
		if (Q8 === "North of Who-ville") {
			correctAnswers++;
		}
		if (Q9 === "The Grinch's Dog") {
			correctAnswers++;
		}
		if (Q10 === "Mulberry Street") {
			correctAnswers++;
		}


		mainContainer.hide();
		score = $("#results").html("<h2>You got " + correctAnswers + " out of " + numQuestions);

		// setTimeout(startGame, 1000);
		startGame();
		

	};	

	// function reset() {
	// 	setTimeout(startGame, 3000);
	// };				
