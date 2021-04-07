let n = 4

document.write("I will redirect you to google.com ok?")
setTimeout(function(){document.write(("in " + --n) + "<br />")}, 1000)
setTimeout(function(){document.write(("in " + --n) + "<br />")}, 2000)
setTimeout(function(){document.write(("in " + --n) + "<br />")}, 3000)
setTimeout(function(){window.location.href="https://www.google.com/"}, 4000)

//for more location methods https://www.w3schools.com/jsref/obj_location.asp