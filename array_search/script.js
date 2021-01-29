//Creating an array
let fruits = []

//adding random elements to array
fruits[0] = "apple"
fruits[1] = "melon"
fruits[2] = "Kiwi"

// //now, if we use indexOf, it returns the position of an string between the array's elements
// let varFruit = fruits.indexOf("melon")
// console.log("Sucess!")
// console.log(varFruit)
// console.log("-------")

// // but, if we try find an element and it fails
// let nonFruit = fruits.indexOf("table")
// console.log("Error when trying to find the element!")
// console.log(nonFruit)
// //the value displayed is -1

// document.write("In the position " + varFruit + " lies " + fruits[varFruit])


// lets something different
// like adding an element and telling it localization

// let addNewFruit = prompt("Hi, I am going to add your fruit in whichever order, in the last position or first, just prompt 'your fruit/last or first'")

let addNewFruit = "watermelon/first"

// positionOf = addNewFruit.indexOf("/")


let newFruit = addNewFruit.slice(0, addNewFruit.indexOf("/"))
let fruitSide = addNewFruit.slice(addNewFruit.indexOf("/")+1).toLowerCase()

if (fruitSide === "last") {
    fruits.unshift(newFruit)
} else if (fruitSide === "first") {
    fruits.push(newFruit)
}

document.write("Your " + newFruit + " was stored in position:" + "<br />" + fruits.indexOf(newFruit))