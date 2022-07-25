function lastIndexOf(array, value) {
    let output = -1;

    if (array.length === 1) {
        output = 0

    } else if (array.length > 1) {
        for (let i = array.length - 1; i >= 0; i--) {

            if (value == array[i]) {
                output = array[i]
            }


        }


    }



    for (let i = array.length - 1; i >= 0; i--) {

        if (value == array[i]) {
            output = array[i]
        }


    }
    return output
}



console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);