alert("Welcome to our site! We are here to help you with all we can do")

var operation = prompt("First of all, what do you need? A length converter, a weight converter or a temperature converter").toLowerCase()

var searchOperation = function(operation) {
    alert("Excellent! So you want a " + operation + ", let me prepare it")
    var numHave = prompt("what is the value you have?").toLowerCase()
    var unitHave = prompt("What is the unit you have?").toLowerCase()
    var unitWant = prompt("What is the unit you want?").toLowerCase()
    var result = 0

    //things to better this code
    // convertLength is different than others functions, he is in plural, instead of singular noun
    // try to display every unit we have

    
    if (operation == "length converter") {
        convertLength(numHave, unitHave, unitWant, result)
    }

    if (operation == "weight converter") {
        convertWeight(numHave, unitHave, unitWant, result)
    }

    if (operation == "temperature converter") {
        convertTemperature(numHave, unitHave, unitWant, result)
    }
}

searchOperation(operation)

function convertLength(numHave, unitHave, unitWant, result) {
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


function convertWeight(numHave, unitHave, unitWant, result) {
    if (unitHave == "gram" && unitWant == "ounce") {
        result = numHave/28.34952
    }

    if (unitHave == "gram" && unitWant == "pound") {
        result = numHave/453.59237
    }

    if (unitHave == "ounce" && unitWant == "gram") {
        result = numHave * 28.34952
    }

    if (unitHave == "ounce" && unitWant == "pound") {
        result = numHave/16
    }

    if (unitHave == "pound" && unitWant == "gram") {
        result = numHave * 453.59237
    }

    if (unitHave == "pound" && unitWant == "ounce") {
        result = numHave * 16
    }

    document.write("The result is: " + result)
}

function convertTemperature(numHave, unitHave, unitWant, result) {
    if (unitHave == "celsius" && unitWant == "fahrenheit") {
        result = numHave * 9/5 + 32
    }

    if (unitHave == "celsius" && unitWant == "kelvin") {
        result = numHave + 273.15
    }

    if (unitHave == "fahrenheit" && unitWant == "celsius") {
        result = (numHave - 32) * (5/9)
    }

    if (unitHave == "fahrenheit" && unitWant == "kelvin") {
        result = (numHave + 459.67) * (5/9)
    }

    if (unitHave == "kelvin" && unitWant == "celsius") {
        result = numHave - 273.15
    }

    if (unitHave == "kelvin" && unitWant == "fahrenheit") {
        result = numHave * 9/5 - 459.67 
    }

    document.write("The result is: " + result)
}