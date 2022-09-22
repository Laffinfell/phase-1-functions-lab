// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
     const scuberHq = 42
    if (pickupLocation > 42) {
        return pickupLocation - scuberHq
    }

    if (pickupLocation < 42) {
        return scuberHq - pickupLocation
    }
}



function distanceFromHqInFeet(pickupLocation) {
    pickupLocation = distanceFromHqInBlocks(pickupLocation) * 264
    return pickupLocation
}

function distanceTravelledInFeet(pickupLocation, destination) {
    // pickupLocation = 43
    // destination = 48
    if (pickupLocation > destination) {
        return (pickupLocation - destination) * 264
    }
    if (pickupLocation < destination) {
        return (pickupLocation - destination) * -264
    }
    
}


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    }
    if (distance > 400 && distance < 2000) {
        return .02 * (distance - 400)
        
    } 
    if (distance > 2000 && distance < 2500) {
        return 25
    }
    if (distance > 2500) {
        return "cannot travel that far"
    }
}

