// function showArticle(id, callbackSucess, callbackError) {
//     //logic of code
//     if (id == 1) {
//         callbackSucess("Callback Functions", "Callback Functions in Javascript is used to ...")
//     } else {
//         callbackError("Error", "There was an error with your request.")
//     }
// }

// var id = parseInt(prompt("type 1 for true:"))

// var callbackSucess = function(title, description) {
//     document.write('<h1>' + title + '</h1>' + '<hr />')
//     document.write('<p>' + description + '</p>')
// }

// var callbackError = function(error, description) {
//     document.write('<h1>' + error + '</h1>')
//     document.write('<p>' + description + '</p>')
// }

// showArticle(id, callbackSucess, callbackError)


// function showGradeScores(student, subject1, subject2, subject3, attendance) {
//     if (student == "allyson") {

//     }
// }

function showArticle(id, callbackSucess, callbackError) {
    if (id == 'html' || id == "HTML") {
        callbackSucess("HTML", "HTML é um interpretador de código na linguagem da web...")
    } else if (id == 'css' || id == 'CSS') {
        callbackSucess("CSS", "CSS ou cascading style sheet é um folha de estilos em formato...")
    } else if (id == "javascript" || id == 'js' || id == "Javascript" || id == 'JS') {
        callbackSucess("Javascript ou JS", "Javascript é a linguagem de programação usada na internet...")
    } else {
        callbackError("Erro", "Sinto muito mas não encontramos nada sobre o assunto em nenhum de nosso bancos de dados. Tente outro termo")
    }
}

var id = prompt("Digite o termo que deseja pesquisar:")

var callbackSucess = function(titulo, desc) {
    document.write("<h1>" + titulo + "</h1>")
    document.write("<p>" + desc + "</p>")
}

var callbackError = function(titulo, desc) {
    document.write("<h1>" + titulo + "</h1>")
    document.write("<p>" + desc + "</p>")
}

showArticle(id, callbackSucess, callbackError)