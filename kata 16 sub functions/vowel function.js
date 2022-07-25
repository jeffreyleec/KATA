const vowel = function (input) {

    for (let i = 0; i < input.length; i++) {

        if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
            input = input.substring(0, i) + input[i].toUpperCase() + input.substring(i + 1);
        }
    }

    return input


}

console.log(vowel("this is a string"))