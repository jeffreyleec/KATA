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


        console.log(botRightArr)
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
console.log(queenBotRightCheck([4, 5], [5, 4]))





