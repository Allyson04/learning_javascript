//While Structure

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

// x = 1

// console.log("Start!")

// while(x <= 10) {
//     x++

//     if(x==5 | x%2 == 0){
//         //the continue skips all code after its declaration, thats why if "x++" was after that
//         continue
//     }

//     console.log(x)
// }

// console.log("The loop ended")



// do while Structure

// let x = 11

// // the do while structure is simples, but the fundamental diference is that here the code inside it activates at least once, and after this the condition is checked to be valid or not
// do {
//     document.write(x + '<br />')
// } while(x <= 10)



// for Structure

//in this  structure we have variable, condition and control embed on the structure, this way, its more easy to manipulate
// for (x=0; x<=10; x++) {
//     document.write(x + '<br />')
// }

fruits = Array()

fruits[0] = 'banana'
fruits[1] = 'apple'
fruits[2] = "strawberry"
fruits[3] = "grape"

y = 0

// while(y < fruits.length) {
//     //repetition or action
//     console.log(fruits[y])

//     //promise of a new loop
//     y++
// }

// do {
//     console.log(fruits[y])
//     y++

// } while(y < fruits.length)

// for(y=0;y<fruits.length;y++) {
//     document.write(fruits[y] + "<br />")
// }

// for(x=0;x<=10;x++) {
//     for(y=1;y<=10;y++) {
//         document.write(x + " x " + y + " = " + (x*y) + "<br />")
//     }
//     document.write("<hr />")
// }