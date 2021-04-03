// if(condition){
// run code1
// } else {
//  run code2
// }

// comparison operators

// equal (==) | check if values are equal
// identical (===) | check if values are equal AND of same type
// different (!=) | check if values are different
// non_identical (!==) | check if values are different AND not of the same type
// less (<)
// more (>)
// less_equal (<=)
// more_equal (>=)

// if (2 === '2') {
//     document.write("2 === '2' is true" + "<br />")
// } else {
//     document.write("2 === '2' is false" + "<br />")
// }

// if ('dois' != 2) {
//     document.write("'dois' != 2 is true" + "<br />")
// } else { 
//     document.write("'dois' != 2 is false" + "<br />")
// }

// if (19 < 21) {
//     document.write("19 < 21 is true" + "<br />")
// } else {
//     document.write("19 < 21 is false" + "<br />")
// }

// if ('2' !== 5) {
//     document.write("'2' !== 5 is true" + "<br />")
// } else {
//     document.write("'2' !== 5 is false" + "<br />")
// }

// if (21 >= 25) {
//     document.write("21 >= 25 is true" + "<br />")
// } else {
//     document.write("21 >= 25 is false" + "<br />")
// }

var score1 = 4;
var score2 = 8;
var score3 = 10;
var score4 = 6;
const averageScore = 7;

if (score1/4 + score2/4 + score3/4 + score4/4 >= averageScore) {
    document.write("Congratulations! You Rock!")
} else {
    document.write("Sorry, but your score wasn't enough...")
}