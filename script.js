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

inviteList = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria']

// console.log(inviteList)

// //in is what separates the variable "x" from the variable we are using to search
// for(x in inviteList) {
//     document.write(inviteList[x] + "<br />")

//     //as we can see, we dont need to define the limit of the looping or how much it add (x++)
// }

// document.write("<hr />")

// // other advantage is that if we use other indexes in arrays, as we see on the other example, the for in loop uses a index it defines alone

// inviteList = Array()

// inviteList[2] = "Jorge"
// inviteList[-1] = "Jamilton"
// inviteList[true] = "José"
// inviteList["zebra"] = "Ana"
// inviteList[2.1] = "Maria"

// for(x in inviteList) {
//     document.write("index: " + x + "<br />" + "value: " + inviteList[x] + "<br />" + "<br />")

//     //as we can see, we dont need to define the limit of the looping or how much it add (x++)
// }

console.log(inviteList)

//as we can see here, forEach is a prototype function, it needs to be connected to an variable, and after that it creates an callback function with value (being the value in this position of array), the index and the array. all this can be named as other thing though

// inviteList.forEach(function(value, index, array) {
//     document.write("index: " + index + " | value: " + value + "<br />")
    
//     //we can even use with ifs to add new values
//     if(value == "Jamilton") {
//         array[index] = "allyson"
//     }
// })

//we can use only one variable too, but if we use other, we need to use it in order "value, index, array"
// inviteList.forEach(function(value) {
//     document.write(value + "<br />")
// })

//using callback functions and wrapper, we can even use the same function with other arrays

// newInviteList = ["Valadão", "Daniela", "Allyson", "Gláucio"]

// callBack = function(value) {
//     document.write(value + "<br />")
// }

// inviteList.forEach(callBack)
// document.write("<hr />")
// newInviteList.forEach(callBack)

// console.log(inviteList)

