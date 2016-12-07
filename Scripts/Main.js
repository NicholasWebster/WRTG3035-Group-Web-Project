function initialize()	{
	// List of consoles that buttons will be created for.
	var consoleList = [ "xBox/360/One","PlayStation 1/2/3/4", "NES and N64",
						"GameCube", "Wii/Wii u", "Atari 2600",
						"Dream Cast","GameBoy","PSP"  ];

	// Defines the stage heigh and width.
	stageHeight = $('#consoles').height();
	stageWidth = $('#consoles').width();

	// Adds height and width attributes to the canvas.
	// These must be defined independantly from the CSS for the canvas to work.
	$('#consolesCanvas').attr("height", stageHeight);
	$('#consolesCanvas').attr("width", stageWidth);

	// Sets the consoles canvas as a CreateJS stage.
	canvasStage = new createjs.Stage("consolesCanvas");

	// Creates buttons from the consoles defined in the list.
	generateButtonsFromList(consoleList);

	// The stage must be updated everytime a change is made to it.
	// Including after initially populating it with content.
	canvasStage.update();

}

// Generates a console button for every item in the passed list.
function generateButtonsFromList(list) {

	// Defines all relevent heights and widths relative to canvas size.

	/* The two columns on either end of the console list. Together they take up
		1/4th of the page width. (1/4)(1/2) = (1/8) */
	var controllerColumnWidth = stageWidth/9;

	// The canvas is split into 6 sections, 3 columns for the consoles.
	var consoleColumnWidth = controllerColumnWidth*2;

	// Determins the number of consoles to display in each column.
	var consolePerColumn = list.length/3;

	// Gets the height between consoles adding 2 for the top and bottom margin.
	var consoleHeight = stageHeight/(consolePerColumn+2);

	// The Working Coords will be updated as the we move through the for loop.
	var workingXCoord = controllerColumnWidth * 2.5;
	var workingYCoord = consoleHeight;
	var workingCountDown = consolePerColumn;


	// Runs through the list creating and placing a button for each item in the list.
	for (i = 0; i < list.length; i++) {

		// Create the button named with the string in that list position and position it.
		consoleButton(list[i], workingXCoord, workingYCoord);

		// Updates the working coords for the next button placement:
		if(workingCountDown > 1) {
			// If we haven't hit the end of a console, then simply update the y-coord.
			workingYCoord += consoleHeight;
			workingCountDown--;
		}
		else {
			// If we hit the end fo the column then reset the y-coord and update the x-coord.
			workingYCoord = consoleHeight;
			workingXCoord += consoleColumnWidth;
			workingCountDown = consolePerColumn;
		}
	}
}

// This function is still in progress.
function loadConsoleStyle(styleNumber)	{

}

// This function is still in progress.
function scoreCounterReset() {

}

// This function is still in progress
function scoreCounterIncrament() {

}

// Creates a button object with the given name at the given x/y coordinates.
function consoleButton(_name, _xLoc, _yLoc){
	this.name = _name;
	this.cjsObject = new createjs.Text(_name, "17pt Arial", "White");
	this.cjsObject.textAlign = 'center';
	this.cjsObject.x = _xLoc;
	this.cjsObject.y = _yLoc;

	canvasStage.addChild(this.cjsObject);
}

// This essentially turns the consoleButton function into a class.
// That way we can create a new instance of a button for each console.
consoleButton.constructor = consoleButton;