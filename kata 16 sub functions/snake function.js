const snake = function (input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
            input = input.substring(0, i) + "_" + input.substring(i + 1);
        }
    }
    return input
}

console.log(snake("this is a string"))