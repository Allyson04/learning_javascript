alert("Welcome to our site! We are here to help you with all we can do")

var operation = prompt("First of all, what do you need? A length converter, a weight converter or a temperature converter")

var searchOperation = function(operation) {
    alert("Excellent! So you want a " + operation + ", let me prepare it")
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

searchOperation(operation)

function convertLengths(numHave, unitHave, unitWant) {
    var result = 0

    if (unitHave == "meter" && unitWant == "inch") {
        result = numHave/0.0254
    }
    
    if (unitHave == "meter" && unitWant == "feet") {
        result = numHave/0.3048
    }

    if (unitHave == "inch" && unitWant == "meter") {
        result = numHave * 0.0254
    }

    if (unitHave == "inch" && unitWant == "feet") {
        result = numHave/12
    }

    if (unitHave == "feet" && unitWant == "inch") {
        result = numHave * 12
    }

    if (unitHave == "feet" && unitWant == "meter") {
        result = numHave * 0.3048
    }

    document.write("The result is " + result)
}


