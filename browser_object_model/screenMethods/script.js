// Screen methods

let windowHeight = window.screen.height // returns the total height
let windowWidth = window.screen.width // returns the total width
let windowsAvailHeight = window.screen.availHeight // returns the height of the website, without the taskbar
let windowsAvailWidth = window.screen.availWidth // returns the width of the website

let lineBreak = "<br />"

document.write("The Total Height of your screen is: " + windowHeight)
document.write(lineBreak)
document.write("The Total Width of your screen is: " + windowWidth)
document.write(lineBreak)
document.write(lineBreak)

document.write("The Width of this Website is: " + (windowsAvailWidth))
document.write(lineBreak)
document.write("The Height of the Task Bar is: " + (windowHeight - windowsAvailHeight))




//for more screen functions, acess https://www.w3schools.com/jsref/obj_screen.asp'