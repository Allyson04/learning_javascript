//creating array
let objects = ["chair", "table", "fork"]

//creating a function to refresh modal with array
function displayArray() {
    document.querySelector("#modal-showElements").innerHTML = objects
}

//activating function above
displayArray()


//creating function to add elements to array
function addElement() {

    //saving value inside input and lowercasing it to prevent errors
    let inputValue = document.getElementById("elementInput").value.toLowerCase()

    //searching the element inside array
    let elementSearch = objects.indexOf(inputValue)
    
    //adding if-else in case of the value inside input been empty or already been added to array
    if (inputValue === "") {

        //displaying alert for case of value equals empty
        alert("Please, insert something.")
    } else if (elementSearch == "-1") {

        //added element in array
        objects.push(inputValue)

        //and erasing the content inside input
        document.getElementById("elementInput").value = ""
    } else if (elementSearch !== "-1") {

        // displaying alert for cases of value been already present in array
        alert("This Element was already added, try a new one.")
    } 

    // refreshing the display of array
    displayArray()
}

//adding function to remove elements from array
function removeElement() {
    //saving value inside input and lowercasing it to prevent errors
    let inputValue = document.getElementById("elementInput").value.toLowerCase()

    //searching the element inside array
    let locateElement = objects.indexOf(inputValue)

    //creating if-else to evaluate if the element exists or not in array
    if (locateElement == "-1") {

        //displaying an alert
        alert("Your element don't exist, try again with a valid one.")

    } else if (locateElement !== "-1") {

        //removing the elements from array with splice
        //the first value means the start of cutting
        //the second one is how much elements you want to remove 
        objects.splice(locateElement, 1)
    }

    // refreshing the display of array
    displayArray()
}

//creating function to order elements alphabetically
function orderElement() {
    //sorting elements
    objects.sort()

    // refreshing the display of array
    displayArray()
}