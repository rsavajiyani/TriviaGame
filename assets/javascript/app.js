
//instance variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeRemaining = 20;
var userChoice;

//questionBank object
var questionBank = [
	{
		question: "Which team selected Kobe Bryant directly out of high school in the 1996 NBA draft?";
		choices: ["Toronto Rapters", "Phoenix Suns", "LA Lakers", "Miami Heat", "Charlotte Hornets"];
		right: "Charlotte Hornets";
	},
	{
		question: "Where did Steve Nash go to college?";
		choices: ["University of Arizona", "Duke University", "University of North Carolina", "Arizona State University", "Santa Clara University"];
		right: "Santa Clara University";
	}
	{
		question: "Which rookie was selected first in the 2017 NBA Draft?";
		choices: ["Ben Simmons", "Lonzo Ball", "Markelle Fultz", "Josh Jackson", "Jason Tatum"];
		right: "Markelle Fultz";
	}
	{
		question: "Which NBA team plays in Houston?";
		choices: ["Spurs", "Rockets", "Mavericks", "TrailBlazers", "Bucks"];
		right: "Rockets";
	}
	{
		question: "What was the nickname for the 1992 USA Men's Olympic Basketball Team?"
		choices: ["Greatest Show on Sneakers", "Redeem Team", "Dream Team", "GOATs", "Immortals"]
		right: "Dream Team";
	}
]

$('#start_button').on('click',function(){
	//call game start function
});


/*functions:

game start function() {
	for(var i = 0; i < questionBank.length; i++) {
		#("#div2").append('<p>' + trivia[i].question + '</p>');
		for(var j = 0; j < questionBank[i].choices.length; j++) {
			//append questions along with answers(as radio buttons)
		}
	}
	timer = setInterval(countdown function, 5000);
	//append Remaining Time, span = timeRemaining
}

game done function() {
	if (userChoice == questionBank.right) {
		correct++;
	}
	else {
		incorrect++;
	}
	call result function();
}

result function() {
	$("#div2").html("<h2>" Game Finished "</h2>");
	"" "" .append("<h2> Correct:" + correct );
	"" "" .append("<h2> Incorrect:" + incorrect);	
}



timer countdown function() {
	timeRemaining -- ;
	if (timeRemaining <= 0) {
		alert("TIME UP! YOU HAVE LOST THE GAME!")
		call game reset function();
	}

