// 3 scopes: global, function or block

//global scope

var anime = "Naruto"

//block scope

if (true) {
    //if a var is declared in a block scope, it becomes available to global scope
    var anime2 = "Dragon Ball"
    document.write(anime)
}

// here the string "Dragon ball" appears normally, even though it was declared in a block scope
document.write(anime2)
document.write("<br />")

function x() {

    // even inside functions, the var anime and anime2 are read and used correctly
    document.write(anime)
    document.write(anime2)

    // but, if a var is declared inside a function scope
    var anime3 = "Kaiji"
}

x() 

document.write("<br />")

// the var isn't recognized in global scope, this way, we have:
// global scope works inside a block and function scope.
// block scope works inside global scope and function scope
// function scope don't let the var elevate to global scope or/and block scope
document.write(anime3)