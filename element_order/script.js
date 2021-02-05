let objects = ["chair", "table", "fork"]
document.querySelector("#modal-showElements").classList.add("disabled")

function displayArray() {
    document.querySelector("#modal-showElements").innerHTML = objects
}

function addElement() {
    let inputValue = document.getElementById("elementInput").value.toLowerCase()
    console.log(inputValue)
    
    if (inputValue === "") {
        alert("Please, insert something.")
    } else {
        let elementSearch = objects.indexOf(inputValue)
        console.log(elementSearch)

        if (elementSearch == "-1") {
            objects.push(inputValue)
            console.log(objects)

            document.getElementById("elementInput").value = ""
        } else if (elementSearch !== "-1") {
            alert("This Element was already added, try a new one.")
        }
    }

    displayArray()
}

function removeElement() {
    let inputValue = document.getElementById("elementInput").value.toLowerCase()

    // console.log(inputValue)


    let locateElement = objects.indexOf(inputValue)

    console.log(locateElement)

    if (locateElement == "-1") {
        alert("Your element don't exist, try again with a valid one.")
        // alert("the element don't exist")

    } else if (locateElement !== "-1") {
        // console.log(objects)
        objects.splice(locateElement, 1)
        // alert("the element exists")
        console.log(objects)
    }
}

function orderElement() {
    objects.sort()
    console.log(objects)

    displayArray()
}