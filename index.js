// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let distance = location
    if(location > 42) {
        distance = (location - 42)
    }else{
         distance = (42 - location)
    }

    return distance
}

function distanceFromHqInFeet(dist) {
    let newDist = distanceFromHqInBlocks(dist)
    newDist = newDist * 264
    return newDist
}

function distanceTravelledInFeet(begin , end) {
    let distance 
    if (end > begin){
        distance = (end - begin)*264
    }else{
        distance = (begin - end)*264
    }
    return distance
}

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination);
    let fare;
    
    switch (true){
        case dist <= 400:
            fare = 0
            break
        case dist > 400 && dist < 2000:
            fare = (dist - 400)*.02;
            break
        case dist > 2000 && dist <= 2500:
            fare = 25;
            break
        case dist > 2500:
        fare = "cannot travel that far"
    }
    return fare;
}