const squareCode = function (message) {

    let messageNoSpace = ""
    messageNoSpace = message.split(" ")
    let resultRaw = ""

    for (let j = 0; j <= messageNoSpace.length - 1; j++) {
        resultRaw = resultRaw + messageNoSpace[j]
    }
    // resultRaw = string without space - concat 

    let rowLength = Math.ceil(Math.sqrt(resultRaw.length))

    let result = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
    let rowCount = 1
    let columnCount = 0
    for (let i = 0; i <= resultRaw.length - 1; i++) {


        if (columnCount < rowLength) {
            result[columnCount].push(resultRaw[i])
            columnCount++

        } else if (columnCount = rowLength) {
            columnCount = 0
            result[columnCount].push(resultRaw[i])
            columnCount++
        }
    }

    let finalResult = ""
    let rowCountx = 0
    for (let p = 0; p <= result.length - 1; p++) {


        if (rowCountx < rowLength) {

            finalResult = finalResult + result[p] + " "

            rowCountx++

        }


    }

    let output = finalResult.replaceAll(",", "")
    return output
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));