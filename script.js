// DOM Manipulation

// getElementById() //Catches Element by his Id, remember that Id is intended to be used once
// getElementsByTagName() //Catches Elements by Tag Name, for example, links is uses <a>, images uses <img>, and go on
// getElementsByClassName() //Catches Elements by class name, like CSS
// getElementsByName() // Catches Elements by Name, like Name="radio_button"

// Considering that script is read before HTML, then we are using an script tag to use Javascript, the code is in index.html

function distributionOfCharacters() {

    //here we are selecting an element by Id and then extracting the value within
    var characterInputed = document.getElementById('input_characters').value

    //Now we erase the value in the element
    document.getElementById('input_characters').value = ""

    // Erasing blank spaces between strings
    characterInputed.trim()

    // because the value inserted within inputs are always identified as strings, we decide to use switch, below this we tried using if-else but couldn't think of a way to do 
    switch (characterInputed) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        document.getElementById("input_numbers").value += characterInputed

        break

        default:
        document.getElementById("input_words").value += characterInputed

        break
    }

    // Can we do it with if-else instead of switch?
    // if (characterInputed == Number) {
    //     document.getElementById("input_number").value = document.getElementById("input_number").value + characterInputed
    // }
}

function changeStyle(idVar, colors) {
    var colors = prompt("Which color do you want? (Insert only hexadecimal color)");

    document.getElementById(idVar).style.borderColor = colors
}

function changeToDefault(div1, div2, div3, div4) {
    document.getElementById(div1).style.borderColor = div1
    document.getElementById(div2).style.borderColor = div2
    document.getElementById(div3).style.borderColor = div3
    document.getElementById(div4).style.borderColor = div4
}