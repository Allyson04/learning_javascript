function sum (a, b) {
    results = 0

    for(i in arguments) {
        console.log(i)
        //arguments is an "array" of elements sended to the function, in this case we are making the sum of all elements
        //in the case of an paramenter be an string, he is concataned and break the sum
        results += arguments[i]
        console.log(results)
    }
}

console.log(sum(7, 7, 9, 2.3))