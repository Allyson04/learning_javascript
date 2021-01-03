alert("Welcome to our site! We are here to help you with all we can do")

var operation = prompt("First of all, what do you need? A length converter, a weight converter or a temperature converter")

var searchOperation = function(operation) {
    var numHave = prompt("what is the value you have?")
    var unitHave = prompt("What is the unit you have?")
    var unitWant = prompt("What is the unit you want?")
    
    if (operation == "length converter") {
        convertLengths(numHave, unitHave, unitWant)
    }

    if (operation == "weight converter") {
        convertWeight(numHave, unitHave, unitWant)
    }

    if (operation == "temperature converter") {
        convertTemperature(numHave, unitHave, unitWant)
    }
}