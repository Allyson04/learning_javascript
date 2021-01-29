//Creating an array
let fruits = []

//adding random elements to array
fruits[0] = "apple"
fruits[1] = "melon"
fruits[2] = "Kiwi"

//now, if we use indexOf, it returns the position of an string between the array's elements
let varFruit = fruits.indexOf("melon")
console.log("Sucess!")
console.log(varFruit)
console.log("-------")

// but, if we try find an element and it fails
let nonFruit = fruits.indexOf("table")
console.log("Error when trying to find the element!")
console.log(nonFruit)
//the value displayed is -1

document.write("In the position " + varFruit + " lies " + fruits[varFruit])