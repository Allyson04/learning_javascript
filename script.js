var name = prompt("What is your name?");
var height = parseFloat(prompt("How tall are you? (in centimeters)"));
var weight = parseFloat(prompt("How much do you weigh? (in kilograms)"));
var BMI = null;

height /= 100

BMI = weight / (height*height)