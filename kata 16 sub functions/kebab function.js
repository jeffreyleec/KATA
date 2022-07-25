const kebab = function (input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
            input = input.substring(0, i) + "-" + input.substring(i + 1);
        }
    }
    return input
}

console.log(kebab("this is a string"))