const organizeInstructors = function(instructors) {
  // Put your solution here


let allCourses= {
  ios: [],
  Web: [],
  Blockchain: []
}

for (let i = 0; i<instructors.length;i++){
  if (instructors[i].course == "iOS"){
    //console.log(instructors[i].name)
    allCourses.ios.push(instructors[i].name)
  }else if (instructors[i].course == "Web"){
    //console.log(instructors[i].name)
    allCourses.Web.push(instructors[i].name)
  }else if (instructors[i].course == "Blockchain"){
    //console.log(instructors[i].name)
    allCourses.Blockchain.push(instructors[i].name)
  }
  
}
return allCourses;
//console.log(instructors[0])

};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));