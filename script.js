function showArticle(id, callbackSucess, callbackError) {
    //logic of code
    if (id == 1) {
        callbackSucess("Callback Functions", "Callback Functions in Javascript is used to ...")
    } else {
        callbackError("Error", "There was an error with your request.")
    }
}

var id = parseInt(prompt("type 1 for true:"))

var callbackSucess = function(title, description) {
    document.write('<h1>' + title + '</h1>' + '<hr />')
    document.write('<p>' + description + '</p>')
}

var callbackError = function(error, description) {
    document.write('<h1>' + error + '</h1>')
    document.write('<p>' + description + '</p>')
}

showArticle(id, callbackSucess, callbackError)
