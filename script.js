// //defining value of variable x
// x = 1

// while(x <= 10) {
//     //do the function
//     document.write(x + '<br />')

//     //and add 1 for x
//     x += 2
// }

// x = 1

// console.log("Start!")

// while(x <= 10) {
//     console.log(x)

//     if(x == 5){
//         break
//     }

//     x++
// }

// console.log("The loop ended")

x = 1

console.log("Start!")

while(x <= 10) {
    x++

    if(x == 5){
        //the continue skips all code after its declaration, thats why if "x++" was after that
        continue
    }

    console.log(x)
}

console.log("The loop ended")