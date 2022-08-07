const sumLargestNumbers = function (data) {

    let largestNumFirst = 0
    let largestNumSecond = 0

    for (let i = 0; i <= data.length; i++) {
        if (data[i] > largestNumFirst) {
            largestNumFirst = data[i]
        }
    }

    for (let j = 0; j <= data.length; j++) {

        if (data[j] > largestNumSecond && data[j] !== largestNumFirst) {
            largestNumSecond = data[j]
        }
    }
    let finalNum = largestNumFirst + largestNumSecond
    return finalNum


};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));