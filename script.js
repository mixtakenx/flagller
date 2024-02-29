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
		flagOutput.innerHTML = '<img src="images/1280px-Flag_of_Australia.svg.png" alt="Australia">';
		correctFlag = true;
	} else if (colors.length == 3 && colors[0] == "red" && colors[1] == "white" 
		flagOutput.innerHTML = '<img src="images/Flag_of_Indonesia.png" alt="Indonesia">';
		correctFlag = true;
	} else if (colors.length == 3 && colors[0] == "red" && colors[1] == "white" 
		flagOutput.innerHTML = '<img src="images/flag_of_singapore.png" alt="Singapore">';
		correctFlag = true;
} else if (colors.length == 3 && colors[0] == "blue" && colors[1] == "white" && colors[2] == "red") {
		flagOutput.innerHTML = '<img src="images/flag_of_New_Zealand.png" alt="New Zealand">';
		correctFlag = true;
} else if (colors.length == 3 && colors[0] == "white" && colors[1] == "black" && colors[2] == "red") && colors[2] == "yellow") {
		flagOutput.innerHTML = '<img src="images/flag_of_Papua_New_Guinea.png" alt="Papua New Guinea">';
		correctFlag = true;
} else if (colors.length == 3 && colors[0] == "blue" && colors[1] == "yellow" && colors[2] == "red") && colors[2] == "white") {
		flagOutput.innerHTML = '<img src="images/Flag_of_Malaysia.png.webp" alt="Malaysia">';
		correctFlag = true;
} else if (colors.length == 3 && colors[0] == "yellow" && colors[1] == "white" && colors[2] == "blue") && colors[2] == "red") {
		flagOutput.innerHTML = '<img src="images/Flag_of_the_Philippines.png" alt="Philippine">';
		correctFlag = true;
} else if (colors.length == 3 && colors[0] == "red" && colors[1] == "yellow" 
		flagOutput.innerHTML = '<img src="images/Flag_of_Vietnam.png" alt="Vietnam">';
		correctFlag = true;
} else if (colors.length == 3 && colors[0] == "blue" && colors[1] == "red" && colors[2] == "white") {
		flagOutput.innerHTML = '<img src="images/Flag_of_Cambodia.png" alt="Cambodia ">';
		correctFlag = true;
	} else {
		flagOutput.innerHTML = "Sorry, that's not correct. Try again!";
	}

	// Display a message if the user's guess is correct
	if (correctFlag) {
		alert("Congratulations, that's correct!");
	}
}
