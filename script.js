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
	} else if (colors.length == 3 && colors[0] == "green" && colors[1] == "white" && colors[2] == "red") {
		flagOutput.innerHTML = '<img src="images/flag_france.png" alt="French Flag">';
		correctFlag = true;
	} else {
		flagOutput.innerHTML = "Sorry, that's not correct. Try again!";
	}

	// Display a message if the user's guess is correct
	if (correctFlag) {
		alert("Congratulations, that's correct!");
	}
}
