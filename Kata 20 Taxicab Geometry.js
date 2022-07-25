const blocksAway = function (directions) {
  let positionDirection = "start"
  let start = [0, 0]
  let location = start
  let dirArry = []
  let stepsArry = []
  let result = { east: 0, north: 0 }
  for (let i = 0; i < directions.length; i += 2) {

    dirArry.push(directions[i])

  } // creates arry of directions, i - 0 first turn etc etc 
  for (let i = 1; i < directions.length; i += 2) {

    stepsArry.push(directions[i])

  } // creates arry for number of steps for i turn 
  // console.log(dirArry)
  // console.log(stepsArry)

  for (let i = 0; i < dirArry.length; i++) {
    //console.log(dirArry[i] + stepsArry[i])
    if (positionDirection == "posOne") {
      if (dirArry[i] == "left") {
        location[0] -= stepsArry[i]
        positionDirection = "posTwo"

      } else if (dirArry[i] == "right") {
        location[0] += stepsArry[i]
        positionDirection = "posFour"

      }

    } else if (positionDirection == "posTwo") {
      if (dirArry[i] == "left") {
        location[1] -= stepsArry[i]
        positionDirection = "posThree"


      } else if (dirArry[i] == "right") {
        location[1] += stepsArry[i]
        positionDirection = "posOne"
      }

    } else if (positionDirection == "posThree") {
      if (dirArry[i] == "left") {
        location[0] += stepsArry[i]
        positionDirection = "posFour"

      } else if (dirArry[i] == "right") {
        location[0] -= stepsArry[i]
        positionDirection = "posTwo"
      }

    } else if (positionDirection == "posFour") {
      if (dirArry[i] == "left") {
        location[1] += stepsArry[i]
        positionDirection = "posOne"

      } else if (dirArry[i] == "right") {
        location[1] -= stepsArry[i]
        positionDirection = "posThree"
      }

    } else if (positionDirection == "start") {
      if (dirArry[i] == "left") {
        location[1] += stepsArry[i]
        positionDirection = "start"

      } else if (dirArry[i] == "right") {
        location[0] += stepsArry[i]
        positionDirection = "posFour"
      }



    }
    //console.log(location + " " + i + " move")
  }

  //return location
  result.east = location[0];
  result.north = location[1];
  return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

