const urlDecode = function (text) {
    let result = {};
    const spaces = text.replaceAll('%20', ' ')
    const splits = spaces.split("&")

    for (let i = 0; i < splits.length; i++) {
        let raw = splits[i].split("=")
        let key = raw[0]
        let value = raw[1]

        result[key] = value;
    }

    return result

};


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);