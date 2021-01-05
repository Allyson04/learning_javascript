alert("Welcome to our site! We are here to help you with all we can do")

var operation = prompt("First of all, what do you need? A length converter, a weight converter or a temperature converter")

var searchOperation = function(operation) {
    alert("Excellent! So you want a " + operation + ", let me prepare it")
    var numHave = prompt("what is the value you have?")
    var unitHave = prompt("What is the unit you have?")
    var unitWant = prompt("What is the unit you want?")
    var result = 0

    //things to better this code
    // convertLengths is different than others functions, he is in plural, instead of singular noun
    // try to display every unit we have
    
    
    if (operation == "length converter") {
        convertLengths(numHave, unitHave, unitWant, result)
    }

    if (operation == "weight converter") {
        convertWeight(numHave, unitHave, unitWant, result)
    }

    if (operation == "temperature converter") {
        convertTemperature(numHave, unitHave, unitWant, result)
    }
}

searchOperation(operation)

function convertLengths(numHave, unitHave, unitWant, result) {
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
    if (unitHave == "grams" && unitWant == "ounces") {
        result = numHave/28.34952
    }

    if (unitHave == "grams" && unitWant == "pounds") {
        result = numHave/453.59237
    }

    if (unitHave == "ounces" && unitWant == "grams") {
        result = numHave * 28.34952
    }

    if (unitHave == "ounces" && unitWant == "pounds") {
        result = numHave/16
    }

    if (unitHave == "pounds" && unitWant == "grams") {
        result = numHave * 453.59237
    }

    if (unitHave == "pounds" && unitWant == "ounces") {
        result = numHave * 16
    }

    document.write("The result is: " + result)
}

