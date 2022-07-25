const repeatNumbers = function (data) {
    var output = [];
    for (let x = 0; x < data.length; x++) {
        var temp = []
        for (let y = 0; y <= data[x][1] - 1; y++) {

            //output = output + data[x][0]
            temp = temp + data[x][0];

        }
        output.push(parseInt(temp));
    }
    return output;
};
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));