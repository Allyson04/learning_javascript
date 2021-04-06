// Window methods

console.log("got")

let browserWindow

function openPopup () {
    browserWindow = window.open("https://www.google.com/")
}

function closePopup () {
    //to close windows we need to indicate first the step of opening it
    browserWindow.close("https://www.google.com/")
}

//for more window functions, acess https://www.w3schools.com/jsref/obj_window.asp