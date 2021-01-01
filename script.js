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


function showGradeScores(person, callbackPersonID, callbackError) {
    if (person == "allyson") {
        callbackPersonID("Allyson Eduardo do Santos Silva", "Male", "24/04/2001", "allysoneduardo04@gmail.com")
    } else if (person == "mary") {
        callbackPersonID("Mary S Swarts", "Female", "25/12/1988", "jf9l2bm611@temporary-mail.net")
    } else if (person == "heather") {
        callbackPersonID("Heather R Francis", "Female", "30/01/1992", "xjpisxxakc@temporary-mail.net")
    } else if (person == "dewayne") {
        callbackPersonID("Dewayne C Davies", "Male", "03/02/1990", "z4vcxtc77pr@temporary-mail.net")
    } else {
        callbackError("Error", "Sorry, there was an error with your request. We couldn't locate anyone with name as " + person)
    }
}

person = prompt("Locate your friends! Type their name below!");

var callbackPersonID = function(name, gender, birthday, email) {
    document.write("<h1>" + name + "</h1>")
    document.write("<p>" + gender + "</p>" + "<br />")
    document.write("<p>" + birthday + "</p>" + "<br />")
    document.write("<p>" + email + "</p>" + "<br />")
}

var callbackError = function(title, desc) {
    alert("<h1>" + title + "<h1/>" + "<br />" + "<p>" + desc + "</p>")
}

showGradeScores(person, callbackPersonID, callbackError)

// function showArticle(id, callbackSucess, callbackError) {
//     if (id == 'html' || id == "HTML") {
//         callbackSucess("HTML", "HTML é um interpretador de código na linguagem da web...")
//     } else if (id == 'css' || id == 'CSS') {
//         callbackSucess("CSS", "CSS ou cascading style sheet é um folha de estilos em formato...")
//     } else if (id == "javascript" || id == 'js' || id == "Javascript" || id == 'JS') {
//         callbackSucess("Javascript ou JS", "Javascript é a linguagem de programação usada na internet...")
//     } else {
//         callbackError("Erro", "Sinto muito mas não encontramos nada sobre o assunto em nenhum de nosso bancos de dados. Tente outro termo")
//     }
// }

// var id = prompt("Digite o termo que deseja pesquisar:")

// var callbackSucess = function(titulo, desc) {
//     document.write("<h1>" + titulo + "</h1>")
//     document.write("<p>" + desc + "</p>")
// }

// var callbackError = function(titulo, desc) {
//     document.write("<h1>" + titulo + "</h1>")
//     document.write("<p>" + desc + "</p>")
// }

// showArticle(id, callbackSucess, callbackError)