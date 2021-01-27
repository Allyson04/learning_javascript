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

let existent_things = []

//if we have an important array
existent_things['elements'] = [
    "potassium",
    "carbon",
    "iron",
    "oxygen",
    "osmium",
    "copper",
    "zinc"
]

//and other array
existent_things["energy"] = [
    "light",
    "sound"
]

//can we combine them in other array?
//Yes! We can do this! This is called multidimensional Array

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