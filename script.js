function checkFlag() {
	var input = document.getElementById("colorInput").value;
	var colors = input.split(",");
	var flagOutput = document.getElementById("flagOutput");
	var correctFlag = false;

	// Check if the user's input matches the colors of any country flags
	if (colors.length == 3 && colors[0] == "red" && colors[1] == "white" && colors[2] == "blue") {
		flagOutput.innerHTML = '<img src="images/flag_usa.jpg" alt="United States Flag">';
		correctFlag = true;
	} else if (colors.length == 3 && colors[0] == "red" && colors[1] == "white" && colors[2] == "red") {
		flagOutput.innerHTML = '<img src="images/flag_spain.png" alt="Spanish Flag">';
		correctFlag = true;
	} else if (colors.length == 3 && colors[0] == "blue" && colors[1] == "white" && colors[2] == "red") {
		flagOutput.innerHTML = '<img src="images/flag_france.png" alt="French Flag">';
		correctFlag = true;
	} else if (colors.length == 3 && colors[0] == "blue" && colors[1] == "white" && colors[2] == "red") {
		flagOutput.innerHTML = '<img src="images/flag_australia.png" alt="Australia">';
		correctFlag = true;
	} else if (colors.length == 3 && colors[0] == "red" && colors[1] == "white" 
		flagOutput.innerHTML = '<img src="images/flag_indonesia.png" alt="Indonesia">';
		correctFlag = true;
	} else {
		flagOutput.innerHTML = "Sorry, that's not correct. Try again!";
	}

	// Display a message if the user's guess is correct
	if (correctFlag) {
		alert("Congratulations, that's correct!");
	}
}
