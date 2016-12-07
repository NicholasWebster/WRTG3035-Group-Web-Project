var score = 0;

function initialize()	{
	stageHeight = $('#consoles').height();
	stageWidth = $('#consoles').width();
	$('#consolesCanvas').attr("height", stageHeight);
	$('#consolesCanvas').attr("width", stageWidth);
	canvasStage = new createjs.Stage("consolesCanvas");
	consoleButton("Width: " + stageWidth + " Height: " + stageHeight, 0, 0);
	canvasStage.update();

}

function loadConsoleStyle(styleNumber)	{

}

function scoreCounterReset() {

}

function scoreCounterIncrament() {

}

function consoleButton(_name, _xLoc, _yLoc){
	this.name = _name;
	this.cjsObject = new createjs.Text(_name, "21pt Arial", "White");
	this.cjsObject.x = 50;
	this.cjsObject.y = 50;

	canvasStage.addChild(this.cjsObject);
}
consoleButton.constructor = consoleButton;