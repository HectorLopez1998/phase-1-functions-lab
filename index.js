// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if(location > 42) {
        return location - 42
    } else{
        return 42 - location
    }

}

function distanceFromHqInFeet(destination){
    
    if(destination > 42){
        return (destination - 42)*264
    } else {
        return (42-destination)*264
    }

}

function distanceTravelledInFeet(beginning,destination){
    if(destination > beginning){
        return (destination - beginning)*264
    } else {
        return (beginning-destination)*264
    }
}

// function calculatesFarePrice(distanceTravelledInFeet){
//     price = 0
//     if (distanceTravelledInFeet <= 400) {
//         return price
//     }else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
//         price = 0.2
//         total = distanceTravelledInFeet - 400
//         return (price* total)
//     } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet <= 2500){
//         price = 25

//         return price
//     } else {
//         return "cannot travel that far"
//     }
// }

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }

// console.log(distanceFromHqInBlocks(50))
// console.log(distanceFromHqInFeet(12))
// console.log(distanceTravelledInFeet(12,12))
console.log(calculatesFarePrice(401,500))