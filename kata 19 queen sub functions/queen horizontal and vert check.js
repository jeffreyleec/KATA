
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
    console.log(queenThreat)
    //return queenThreat
}
horizonalCheck([4, 6], [2, 7])





