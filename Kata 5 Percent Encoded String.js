const urlEncode = function (text) {
    let str = "";
    const strRep = "%20"
    for (let i = 0; i <= text.length - 1; i++) {
        if (text[i] !== " ") {
            str = str + text[i]
        } else {
            str = str + strRep
        }
    }

    return str;


};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));