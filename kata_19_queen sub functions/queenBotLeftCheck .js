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


        console.log(botLeftArr)
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
console.log(queenBotLeftCheck([4, 5], [3, 5]))





