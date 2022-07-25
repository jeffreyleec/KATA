const instructorWithLongestName = function (instructors) {
    let longestNameVal = 0;
    let longestNameIndex = 0;


    for (let i = 0; i <= instructors.length - 1; i++) {
        if (instructors[i].name.length > longestNameVal) {
            longestNameVal = instructors[i].name.length
            longestNameIndex = i
        }
    }
    let output = instructors[longestNameIndex]
    return output

};

console.log(instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
]));