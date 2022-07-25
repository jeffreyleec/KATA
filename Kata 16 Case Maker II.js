const makeCase = function (input, type) {
    const camelCase = function (input) {

        let newCase = input.toLocaleLowerCase()
        let caseArry = newCase.split(" ");
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

    const pascal = function (input) {

        let caseArry = input.split(" ");

        if (caseArry.length === 1) {
            return caseArry.toUpperCase()
        } else {
            let resultStr = ""
            for (let i = 0; i < caseArry.length; i++) {
                resultStr = resultStr + caseArry[i][0].toUpperCase() + caseArry[i].slice(1)
            }
            return resultStr;
        }
    };

    const snake = function (input) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === " ") {
                input = input.substring(0, i) + "_" + input.substring(i + 1);
            }
        }
        return input
    }

    const kebab = function (input) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === " ") {
                input = input.substring(0, i) + "-" + input.substring(i + 1);
            }
        }
        return input
    }

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

    const vowel = function (input) {

        for (let i = 0; i < input.length; i++) {
            input
            if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
                input = input.substring(0, i) + input[i].toUpperCase() + input.substring(i + 1);
            } input
        }

        return input


    }

    const consonant = function (input) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] != "a" && input[i] != "e" && input[i] != "i" && input[i] != "o" && input[i] != "u") {
                input = input.substring(0, i) + input[i].toUpperCase() + input.substring(i + 1);
            }
        }
        return input
    }

    const upper = function (input) {
        input = input.toUpperCase()
        return input
    }

    const lower = function (input) {
        input = input.toLowerCase()
        return input
    }


    let emptyArr = []
    //convert type to string
    if (typeof type === 'string') {
        emptyArr.push(type)
    } else {
        emptyArr = type
    }

    if (emptyArr.length < 2) {
        if (type === 'camel') {
            return camelCase(input)
        } else if (type === 'pascal') {
            return pascal(input)
        } else if (type === 'snake') {
            return snake(input)
        } else if (type === 'kebab') {
            return kebab(input)
        } else if (type === 'title') {
            return title(input)
        } else if (type === 'vowel') {
            return vowel(input)
        } else if (type === 'consonant') {
            return consonant(input)
        } else if (type === 'upper') {
            return upper(input)
        } else if (type === 'lower') {
            return lower(input)
        }




    } else {
        let tempOutput = input
        for (let i = 0; i < type.length; i++) {

            if (type[i] === 'camel') {
                tempOutput = camelCase(tempOutput)
            } else if (type[i] === 'pascal') {
                tempOutput = pascal(tempOutput)
            } else if (type[i] === 'snake') {
                tempOutput = snake(tempOutput)
            } else if (type[i] === 'kebab') {
                tempOutput = kebab(tempOutput)
            } else if (type[i] === 'title') {
                tempOutput = title(tempOutput)
            } else if (type[i] === 'vowel') {
                tempOutput = vowel(tempOutput)
            } else if (type[i] === 'consonant') {
                tempOutput = consonant(tempOutput)
            } else if (type[i] === 'upper') {
                tempOutput = upper(tempOutput)
            } else if (type[i] === 'lower') {
                tempOutput = lower(tempOutput)
            }
        }
        return tempOutput
    }
}






