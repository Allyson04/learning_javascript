var idade = prompt("Insira aqui sua idade:");

if (idade < 0) {
    alert("Houve um problema determinando sua idade, verifique-a e tente de novo")
} else if (0 <= idade && idade < 15) {
    result = "Criança"
} else if (15 <= idade && idade < 30) {
    result = "Jovem"
} else if (30 <= idade && idade < 60) {
    result = "Adulto"
} else if (60 <= idade) {
    result = "Idoso"
}

document.write(result)