//The Wrapper technique consists of "wrapping" thh function within a var, being used later for callbacks and other things

var welcome = function(name) {
    document.write("Hi " + name + ", this is my first anonymous function!")
}

var name = prompt("Type your name here:")
welcome(name)
