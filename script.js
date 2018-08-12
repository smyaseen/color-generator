var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";" 
}

function randomColors() {
	var pos1 = Math.floor((Math.random() * 256));
	var pos2 = Math.floor((Math.random() * 256));
	var pos3 = Math.floor((Math.random() * 256));

	var rgbColors = pos1 + ", " + pos2 + ", " + pos3;

	return rgbColors;
}

function randomBackground() {
	body.style.background = "linear-gradient(to right, rgb("
	+ randomColors()
	+ "), rgb( "
	+ randomColors()
	+ "))";


	css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomBackground);
