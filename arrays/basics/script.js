//Creating an arrays
let names_list = Array()
let schools_list = []

//we can also create non-defined arrays
let houses_list = Array('cabin', "'home", 'wood')
let backpack_list = ['plastic', "polyester", 'cloth']

//adding values to this new array
names_list[0] = "Allyson"
names_list[1] = "Eduardo"

//we can add not only strings, but numbers
names_list[2] = 4
names_list[3] = 7

//even binarys
names_list[4] = true
names_list[5] = false

//also, we don't need to use only numbers for searching index

names_list["p"] = "paulo"
names_list["text"] = "Lorem Ipsum"


//when length is used for arrays it displays the number of values in this array, but array's positions starts with 0, and when used length it display the absolute value, always +1 than the last position
console.log(names_list.length)