// Arithmetical Operators

// + => Only works with Number, if its values are different, then it concanate
// - => Difference between two Numbers
// * => Product
// "/" => Division
// % => "Module" uses the rest in a Division
// ++ => increment of 1 (if the symbol comes before the number, it display instantly the new value, but if used after, it refresh the value only after all the expressions)
// -- => Decrement of 1 (see increment)

var num1 = 5;
var num2 = 3;
var name = "Olá "

// document.write(
//     "Testing some expressions with " + num1 + " and " + num2 + "<br />" +
//     num1 + num2 + 
//     "<br />" + "<br />" +

//     // In this example we are concatenating strings and numbers, instead of concatenating strings AND adding up numbers
//     // it happens because if there's one string in the expression, javascript understand its variables as strings, so it casts all numbers into strings
//     // To prevent this to happen, use parenthesis

    

//     // "Here we can see num1 with increment before" + "<br />" + 
//     // (++num1) + "<br />" 

//     "Here we can see num1 with increment after" + "<br />" + 
//     (num1++) + "<br />" +
//     "but if we show its value again, it shows with increment" + "<br />" +
//     (num1)
    

// )

// You can also use a short operation, as showed below.

// var num3 = 4;

// num3 += 2
// document.write(num3 + "<br />")

// num3 -= 2
// document.write(num3 + "<br />")

// num3 *= 5
// document.write(num3 + "<br />")

// num3 /= 2
// document.write(num3 + "<br />")

// You can also use it for strings!

var name = "Olá "
name += prompt("Digite seu Nome:")

alert(name)