const title = function (input) {

    let caseArry = input.split(" ");

    if (caseArry.length === 1) {
        return caseArry.toUpperCase()
    } else {
        let resultStr = ""
        for (let i = 0; i < caseArry.length; i++) {
            resultStr = resultStr + caseArry[i][0].toUpperCase() + caseArry[i].slice(1) + " "
        }
        return resultStr;
    }
};
console.log(title("this is a string"));