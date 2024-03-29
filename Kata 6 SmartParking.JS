const whereCanIPark = function (spots, vehicle) {
    let firstAvilSpot = []
    if (vehicle === "regular") {
        let colCount = 0
        let rowIndexCount = 0

        for (let r = 0; r <= spots.length - 1; r++) {
            for (let c = 0; c <= spots.length - 1; c++) {
                //console.log(spots[r][c])
                if (spots[r][c] != 'R') {
                    firstAvilSpot = "false"
                } else {

                    //console.log('here')
                    firstAvilSpot = [[c], [r]]
                    return firstAvilSpot
                }
            }
        }
        return firstAvilSpot
    } else if (vehicle === "small") {
        for (let r = 0; r <= spots.length - 1; r++) {
            for (let c = 0; c <= spots.length - 1; c++) {

                if (spots[r][c] == 'R' || spots[r][c] == 'S') {
                    firstAvilSpot = [[c], [r]]
                    return firstAvilSpot
                } else {
                    firstAvilSpot = "false"
                }
            }

        }
        return "false"
    } else if (vehicle === "motorcycle") {
        for (let r = 0; r <= spots.length - 1; r++) {
            for (let c = 0; c <= spots.length - 1; c++) {
                if (spots[r][c] == 'R' || spots[r][c] == 'S' || spots[r][c] == 'M') {
                    //console.log(spots[r][c])
                    firstAvilSpot = [[c], [r]]
                    return firstAvilSpot
                } else {
                    firstAvilSpot = "false"
                }
            }

        }
        return "false"

    }



};


console.log(whereCanIPark(
    [
        // COLUMNS ARE X
        // 0    1    2    3    4    5
        ['s', 's', 'R', 'S', 'R', 'M'], // 0 ROWS ARE Y
        ['s', 'M', 's', 'S', 'r', 'M'], // 1
        ['s', 'M', 's', 'S', 'r', 'm'], // 2
        ['S', 'r', 's', 'm', 'r', 'M'], // 3
        ['S', 'r', 's', 'm', 'r', 'M'], // 4
        ['S', 'r', 'S', 'M', 'M', 'S']  // 5
    ],
    'regular'
));

console.log(whereCanIPark(
    [
        ['M', 'M', 'R', 'M'],
        ['M', 's', 'M', 'M'],
        ['M', 'M', 'M', 'M'],
        ['M', 'M', 'r', 'M']
    ],
    'small'
));

console.log(whereCanIPark(
    [
        ['s', 's', 'R', 's', 's', 's'],
        ['s', 'm', 's', 'S', 'r', 's'],
        ['s', 'm', 's', 'S', 'r', 's'],
        ['S', 'r', 's', 'm', 'r', 's'],
        ['S', 'r', 's', 'm', 'R', 's'],
        ['S', 'r', 'S', 'M', 'm', 'S']
    ],
    'motorcycle'
))