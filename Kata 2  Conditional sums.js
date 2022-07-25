const conditionalSum = function (values, condition) {
    // Your code here
    var sum = 0
    for (let i = 0; i <= values.length; i++) {
        if (condition === "even") {
            if (values[i] % 2 === 0) {
                sum = sum + values[i]
            }
        } else if (condition === "odd") {
            if (values[i] % 3 === 0) {
                sum = sum + values[i]
            }
        }

    }
    return sum;

};
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));