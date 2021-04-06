// Code your solution in this file!


function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42
    } else {
        return 42 - blocks
    }
}

console.log(distanceFromHqInBlocks(50))

//feet from HQ:

function distanceFromHqInFeet(blocks) {
    if (blocks > 42) {
        return (blocks - 42)*264
    } else {
        return (42 - blocks)*264
    }
} 

console.log(distanceFromHqInFeet(50))


//distance travelled in feet:

function distanceTravelledInFeet(blockStart, blockEnd) {
    return Math.abs(blockStart - blockEnd)*264;
}

console.log(distanceFromHqInFeet(50, 5))

//

let fare;
function calculatesFarePrice(start, destination) {
    const distance = (Math.abs(start - destination)*264)
    if (distance < 400) {
        return 0;
    }

    else if ((distance) >= 400 && distance < 2000){
        return 0.02*(distance - 400);
    }
    
    else if ((distance) > 2000 && distance < 2500){
        return 25;
    }

    else {
        return 'cannot travel that far'
    }

}
calculatesFarePrice(43, 44);
console.log(fare);


