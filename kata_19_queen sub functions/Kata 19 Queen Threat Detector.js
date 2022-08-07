
const generatedBoard = function (whiteQueen, blackQueen) {

    let rowNumWhite = whiteQueen[0];
    let columnWhite = whiteQueen[1];
    let rowblackQueen = blackQueen[0];
    let columnblackQueen = blackQueen[1];

    let emptyBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    emptyBoard[rowNumWhite][columnWhite] = 1
    emptyBoard[rowblackQueen][columnblackQueen] = 1

    console.log(emptyBoard)


    return emptyBoard

};

generatedBoard([0, 0], [2, 2])

const queenThreat = function (whiteQueen, blackQueen) {

    const queenTopLeftCheck = function (whiteQueen, blackQueen) {
        let rowNumWhite = whiteQueen[0];
        let columnWhite = whiteQueen[1];
        let rowblackQueen = blackQueen[0];
        let columnblackQueen = blackQueen[1];



        let topLeftStr = ""
        let topLeftArr = []


        columnWhite = columnWhite + 1
        let tempCol = columnWhite

        for (let r = rowNumWhite; r >= 0; r--) {
            let tempRow = r.toString()
            //console.log(tempRow)

            tempCol = tempCol - 1

            let result = tempRow + tempCol.toString()
            // console.log(result)
            // console.log(typeof topLeftStr)

            topLeftStr = result
            topLeftArr.push(topLeftStr)

        }

        let blackPosStr = rowblackQueen.toString() + columnblackQueen.toString()
        let queenThreat = "not working"

        for (let i = 0; i <= topLeftArr.length; i++) {
            if (topLeftArr[i] != blackPosStr) {
                queenThreat = "false"
            } else {
                queenThreat = "true"
                break
            }



        }
        return queenThreat
    }

    const queenTopRightCheck = function (whiteQueen, blackQueen) {
        let rowNumWhite = whiteQueen[0];
        let columnWhite = whiteQueen[1];
        let rowblackQueen = blackQueen[0];
        let columnblackQueen = blackQueen[1];
        //top left, top right, bottom left, bottom right
        //top left from [4][4] ->[3][3],[2][2], [1][1], [0][0]
        //top right from[4][4]->[3][5],[2][6], [1][7], ([0][8]-<<< 8 th place is off the board ) "<8"
        //bottom left from [4][4] -> [5][3],[6][2], [7][1], ([8][0] this is off the board too
        //bottom right  from [4][4] -> [5][5],[6][6], [7][7]


        let topRightStr = ""
        let topRightArr = []


        columnWhite = columnWhite - 1
        let tempCol = columnWhite

        for (let r = rowNumWhite; r < 9; r++) {
            let tempRow = r.toString()
            //console.log(tempRow)

            tempCol = tempCol + 1

            let result = tempRow + tempCol.toString()
            //console.log(result)
            // console.log(typeof topLeftStr)

            topRightStr = result
            topRightArr.push(topRightStr)

        }

        let blackPosStr = rowblackQueen.toString() + columnblackQueen.toString()
        let queenThreat = "not working"

        for (let i = 0; i <= topRightArr.length; i++) {
            if (topRightArr[i] != blackPosStr) {
                queenThreat = "false"
            } else {
                queenThreat = "true"
                break
            }



        }
        return queenThreat
    }

    const queenBotLeftCheck = function (whiteQueen, blackQueen) {
        let rowNumWhite = whiteQueen[0];
        let columnWhite = whiteQueen[1];
        let rowblackQueen = blackQueen[0];
        let columnblackQueen = blackQueen[1];


        let botLeftStr = ""
        let botLeftArr = []


        columnWhite = columnWhite + 1
        let tempCol = columnWhite

        for (let r = rowNumWhite; r >= 0; r--) {
            let tempRow = r.toString()

            tempCol = tempCol - 1

            let result = tempRow + tempCol.toString()


            botLeftStr = result
            botLeftArr.push(botLeftStr)


            //console.log(botLeftArr)
        }

        let blackPosStr = rowblackQueen.toString() + columnblackQueen.toString()
        let queenThreat = "not working"

        for (let i = 0; i <= botLeftArr.length; i++) {
            if (botLeftArr[i] != blackPosStr) {
                queenThreat = "false"
            } else {
                queenThreat = "true"
                break
            }



        }
        return queenThreat
    }

    const queenBotRightCheck = function (whiteQueen, blackQueen) {
        let rowNumWhite = whiteQueen[0];
        let columnWhite = whiteQueen[1];
        let rowblackQueen = blackQueen[0];
        let columnblackQueen = blackQueen[1];


        let botRightStr = ""
        let botRightArr = []


        columnWhite = columnWhite + 1
        let tempCol = columnWhite

        for (let r = rowNumWhite; r < 9; r++) {
            let tempRow = r.toString()

            tempCol = tempCol - 1

            let result = tempRow + tempCol.toString()


            botRightStr = result
            botRightArr.push(botRightStr)


            //console.log(botRightArr)
        }

        let blackPosStr = rowblackQueen.toString() + columnblackQueen.toString()
        let queenThreat = "not working"

        for (let i = 0; i <= botRightArr.length; i++) {
            if (botRightArr[i] != blackPosStr) {
                queenThreat = "false"
            } else {
                queenThreat = "true"
                break
            }



        }
        return queenThreat
    }

    const horizonalCheck = function (whiteQueen, blackQueen) {
        let rowNumWhite = whiteQueen[0];
        let columnWhite = whiteQueen[1];
        let rowblackQueen = blackQueen[0];
        let columnblackQueen = blackQueen[1];



        let queenThreat = "not working"



        if (rowNumWhite != rowblackQueen && columnWhite != columnblackQueen) {
            queenThreat = "false"
        } else {
            queenThreat = "true"
        }
        //console.log(queenThreat)
        return queenThreat
    }

    if (queenTopLeftCheck(whiteQueen, blackQueen) == "true" || queenTopRightCheck(whiteQueen, blackQueen) == "true" || queenBotLeftCheck(whiteQueen, blackQueen) == "true" || queenBotRightCheck(whiteQueen, blackQueen) == "true" || horizonalCheck(whiteQueen, blackQueen) == "true") {

        // console.log(queenTopLeftCheck(whiteQueen, blackQueen))
        // console.log(queenTopRightCheck(whiteQueen, blackQueen))
        // console.log(queenBotLeftCheck(whiteQueen, blackQueen))
        // console.log(queenBotRightCheck(whiteQueen, blackQueen))
        // console.log(horizonalCheck(whiteQueen, blackQueen))
        return true + " test"

    } else {


        // console.log(queenTopLeftCheck(whiteQueen, blackQueen))
        // console.log(queenTopRightCheck(whiteQueen, blackQueen))
        // console.log(queenBotLeftCheck(whiteQueen, blackQueen))
        // console.log(queenBotRightCheck(whiteQueen, blackQueen))
        // console.log(horizonalCheck(whiteQueen, blackQueen))
        return false + " test"
    }




}

console.log(queenThreat([4, 5], [5, 6]))





