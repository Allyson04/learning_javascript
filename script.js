var name = prompt("What is your name?");
var height = parseFloat(prompt("How tall are you? (in centimeters)"));
var weight = parseFloat(prompt("How much do you weigh? (in kilograms)"));
var BMI = null;
var classification = null;

height /= 100

BMI = weight / (height*height)

if (BMI < 16) {
    classification = "Severe Thinness"
} else if (BMI >= 16 && BMI < 17) {
    classification = "Moderate Thinness"
} else if (BMI >= 17 && BMI < 18.5) {
    classification = "Mild Thinness"
} else if (BMI >= 18.5 && BMI < 25) {
    classification = "Normal"
} else if (BMI >= 25 && BMI < 30) {
    classification = "Overweight"
} else if (BMI >= 30 && BMI < 35) {
    classification = "Obese Class I"
} else if (BMI >= 35 && BMI < 40 ) {
    classification = "Obese Class II"
} else if (BMI >= 40) {
    classification = "Obese Class III"
}