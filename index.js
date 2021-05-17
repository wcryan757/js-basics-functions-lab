// Code your solution in this file!

function distanceFromHqInBlocks(pickUp) {
    if (pickUp > 42) {
        return pickUp - 42;
    }   else {
        return 42 - pickUp;  
    }

}

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickup) * 264;

}
