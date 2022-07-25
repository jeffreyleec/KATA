const camelCase = function (input) {

    let newCase = input.toLocaleLowerCase()
    let caseArry = newCase.split(" ");
    console.log(caseArry)
    if (caseArry.length === 1) {
        return inputArry.toString();
    } else {
        let resultStr = caseArry[0]
        for (let i = 1; i < caseArry.length; i++) {
            resultStr = resultStr + caseArry[i][0].toUpperCase() + caseArry[i].slice(1)
        }
        return resultStr;
    }
};
console.log(camelCase("this is a string"));