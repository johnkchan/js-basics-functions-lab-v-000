// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  if (distance >= 42){
    return distance - 42;
  }
  return 42 - distance;
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end){
  if Math.
}

function calculatesFarePrice(distance){
  if (distanceTravelledInFeet(distance) < 400){
    return 0;
  } else if (distanceTravelledInFeet(distance) >= 400 && distanceTravelledInFeet(distance) <= 2000){
    return (distanceTravelledInFeet - 400) * .02;
  } else if (distanceTravelledInFeet(distance) > 2000 && distanceTravelledInFeet(distance) < 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}