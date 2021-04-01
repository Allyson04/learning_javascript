let video = Array()
video[1] = Array()
video[1]["name"] = "Fullmental Alchemist"
video[1]["category"] = "Animated"

function getVideo() {

    //the commands that is suscetible to failing is inserted inside it
    try {
        console.log(video[0]["category"])
    }
    //but only it isn't enough, now we need to define what to do, lets fix the problem with catch
    catch (error) {
        //we can see the problem message in parenthesis, the var inside it is the error message
        // console.log(error)

        // instead of showing in console, we could send it  with a function
        errorTreatment(error)

        //how about putting a halt to all processing intentionatly?
        throw new Error("Stopping the processing")
    }
    finally {
        //this only reactive to the problem, but doesn't fix it
        console.log("there was a problem 'finally'")
    }

    //if this command show up, then it is because the logic didn't break
    console.log("Got It!")
}

getVideo()

function errorTreatment(errorMessage) {
    console.log("There was a problem, here it is:")
    console.log(errorMessage)
}