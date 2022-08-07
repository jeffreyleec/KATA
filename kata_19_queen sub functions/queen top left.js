const queenTopLeftCheck = function (whiteQueen, blackQueen) {
    let rowNumWhite = whiteQueen[0];
    let columnWhite = whiteQueen[1];
    let rowblackQueen = blackQueen[0];
    let columnblackQueen = blackQueen[1];
    //top left, top right, bottom left, bottom right
    //top left from [4][4] ->[3][3],[2][2], [1][1], [0][0]
    //top right from[4][4]->[3][5],[2][6], [1][7], ([0][8]-<<< 8 th place is off the board ) "<8"
    //bottom left from [4][4] -> [5][3],[6][2], [7][1], ([8][0] this is off the board too
    //bottom right  from [4][4] -> [5][5],[6][6], [7][7]


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
console.log(queenTopLeftCheck([4, 5], [3, 5]))





