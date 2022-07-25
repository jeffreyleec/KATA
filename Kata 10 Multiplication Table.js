const multiplicationTable = function (maxValue) {
    // Your code here
    let result = "";

    for (let i = 1; i <= maxValue; i++) {

        let columnArr = [];


        for (let x = i; x <= maxValue * i; x += i) {
            let rowStr = "";
            rowStr = rowStr + x
            columnArr = columnArr + rowStr + " "

        }

        result = result + columnArr + "\n"
    }
    return result
};


console.log(multiplicationTable(10));




