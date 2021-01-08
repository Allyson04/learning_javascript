// Mouse events

// onclick //used for clicks
// ondblclick //used for double clicks
// onmouseup //used for when pressing a button, if it stays then nothing happen, only after holding the button
// onmouseover //used for hovering an element
// onmouseout //used for getting out of an element

function MouseClick () {
    alert("Element was clicked")
}

function MouseOut () {
    alert("Mouse Out!")
}

function MouseDblClick () {
    alert("One Click is enough! Two is too much!!")
}

function MouseHover () {
    alert("Mouse is hovering this element...")
}


// Keyboard events

onkeydown //used when a key is lowered by pressing
onkeyup // when a key is released 
onkeypress // this one is tricky, it's represent the moment after the key in lowered, but before it release, so a key stays pressed. It only used for keys with a character, so alphabets, numerics and punctuation marks are valid. Ctrl, Del, Caps Lock and similar don't use this event