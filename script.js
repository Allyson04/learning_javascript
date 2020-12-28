// and => && => true if all expressions are true
// or => || => true if any expression is true
// not => ! => true invert the result of comparison

var subject1 = prompt("Grade for subject1:");
var subject2 = 8;
var subject3 = 10;
var attendance = 10;
var averageScore = 7;
var absence = prompt("Number of days when you was late or absent:")

if (subject1/3 + subject2/3 + subject3/3 >= averageScore && attendance - absence >= 8) {
    document.write("Congratulations! You passed the exams and got the necessary frequency!")
} else if (attendance - absence < 8) {
    document.write("Sorry, but you were absent in too much classes! Find your teacher to discuss this problem with him, at least your grades were good enough!")
} else if (subject1/3 + subject2/3 + subject3/3 < averageScore) {
    document.write("Sorry, but your grades were not enough for your approval, study more so your grades became better. Remember to always take a break and drink water!")
} 