const camelCase = function (input) {
    // Your code here
    //console.log(input)
    let newInput = input.toLocaleLowerCase()
    // console.log(newInput)

    let inputArry = newInput.split(" ");
    if (inputArry.length === 1) {
        return inputArry.toString();

    } else {

        let resultStr = inputArry[0]
        for (let i = 1; i < inputArry.length; i++) {
            resultStr = resultStr + inputArry[i][0].toUpperCase() + inputArry[i].slice(1)
        }
        return resultStr;


    }
};


