numSquares = 6;
var colors = []; 
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init()

function init(){
	setmode();
	setsquares();
	reset();
}
function setmode(){
	for (var i =0; i<modeBtn.length; i++){
	modeBtn[i].addEventListener("click", function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}
}

function setsquares(){
	for (var i =0; i<squares.length; i++){
	// add event listeners to squares
	squares[i].addEventListener("click", function(){
		//get color of clicked square
		var clickedcolor = this.style.background;
		// compare color with picked color
		if(clickedcolor === pickedcolor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedcolor);
			h1.style.background = clickedcolor;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
}

function reset(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick random number from array
	pickedcolor = pickColor();
	// change color disply to match picked color
	colorDisplay.textContent = pickedcolor;
	messageDisplay.textContent="";
	resetButton.textContent="New Colors";
	// change color of squares
	for (var i = 0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		} 
	}
	h1.style.background = "steelblue";
}

// reset button call
resetButton.addEventListener("click", function() {
	reset();
});


function changeColors(color){
	//loop through all squares
	for(var i =0; i<squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr =[]
	for(var i = 0; i<num; i++){
		arr.push(randomColor())
		//get random color and push into array
	}
	return arr;
}

function randomColor(){
	//pick red from 0-255
	var r= Math.floor(Math.random()*256);
	//pick green from 0-255
	var g= Math.floor(Math.random()*256);
	//pick blue from 0-255
	var b= Math.floor(Math.random()*256);
	return "rgb(" + r +", " + g + ", " + b +")"; 

}