// //if we have an important array
// let elements = [
//     "potassium",
//     "carbon",
//     "iron",
//     "oxygen",
//     "osmium",
//     "copper",
//     "zinc"
// ]

// //and other array
// let energy = [
//     "light",
//     "sound"
// ]

// //can we combine them in other array?
// //Yes! We can do this! This is called multidimensional Array
// let existent_things = [
//     energy,
//     elements
// ]

// console.log(existent_things)

//Tried new code above, the former way is below

// first of all, we create the principal array
let existent_things = []

//inform which array we are going to use as principal, then which one we use as division inside it
//in this case, the "existent_thing" receives an array called "elements" and this last receives some values like "potassium", "carbon", "iron" and others
existent_things['elements'] = [
    "potassium",
    "carbon",
    "iron",
    "oxygen",
    "osmium",
    "copper",
    "zinc"
]

//and the second array inside "existent_things"
existent_things["energy"] = [
    "light",
    "sound"
]

// lets see how they are shown in document
document.write(existent_things["elements"][2])
// console.log(existent_things[Array(2)])

let names = []

names["peoples_name"] = []
names["peoples_name"][0] = "Paul"
names["peoples_name"][1] = "Humbert"
names["peoples_name"][2] = "Twoberto"

names["things_name"] = Array("workbench", "bench", "table", "chair")

console.log(names["peoples_name"][2])
// console.log(names)