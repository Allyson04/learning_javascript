let number = 8

document.write("counting indefinitly")

function count() {
    document.write(number + "<br />") 
    number++


    //if you wan to stop the setInterval, you will have to send the clearInterval() his value, in that case, interval it is
    console.log(number === 11 ? (clearInterval(interval), "just joking") : "wait...")
}

//it is important to say that setInterval and setTimeout ALWAYS use callback functions, this way, if you want to use functions, you have to use an function inside an callback function, like the example below
interval = setInterval(function () {count()}, 1000)

//for more info about timing methods, https://www.w3schools.com/js/js_timing.asp