const chooseRecipe = function (bakeryA, bakeryB, recipes) {
    let bakeryAMatchingIndex = []
    let bakeryAMatchingIngrident = []
    let bakeryBMatchingIndex = []
    let bakeryBMatchingIngrident = []
    let doubleMatchingIndex = []
    let doubleMatchingRecipesOutput = []
    for (let i = 0; i <= recipes.length - 1; i++) { //loops recipes 
        //console.log(recipes[i]['ingredients'][0]);
        for (let j = 0; j <= recipes[i]['ingredients'].length - 1; j++) {    //loops recipes- ingredients 
            //console.log(recipes[i]['ingredients'][j]);
            for (let a = 0; a <= bakeryA.length - 1; a++) { // loops bakeryA ingredients 
                //console.log(bakeryA[a])
                if (bakeryA[a] == recipes[i]['ingredients'][j]) { //bakeryA matches with recipe ingredients list       
                    //console.log(bakeryA[a] + " matches recipe " + recipes[i]['name']) // 
                    //bakeryAMatchingIndex.push(recipes[i]['name'])
                    bakeryAMatchingIndex.push(i)
                    let ingreA = recipes[i]['ingredients'][j]
                    bakeryAMatchingIngrident.push(ingreA)

                }
            }

            for (let a = 0; a <= bakeryB.length - 1; a++) { // loops bakeryA ingredients 
                //console.log(bakeryA[a])
                if (bakeryB[a] == recipes[i]['ingredients'][j]) { //bakeryA matches with recipe ingredients list       
                    //console.log(bakeryA[a] + " matches recipe " + recipes[i]['name']) 
                    //bakeryAMatchingIndex.push(recipes[i]['name'])
                    bakeryBMatchingIndex.push(i)

                    let ingreB = recipes[i]['ingredients'][j]
                    bakeryBMatchingIngrident.push(ingreB)
                    //console.log(ingreB + "asdnmpoasd")

                }
            }


        }
    }

    for (let q = 0; q <= bakeryAMatchingIndex.length - 1; q++) { //loops recipes 
        //console.log(recipes[i]['ingredients'][0]);
        for (let w = 0; w <= bakeryBMatchingIndex.length - 1; w++) {
            if (bakeryAMatchingIndex[q] === bakeryBMatchingIndex[w]) {
                //q is the double matching index 
                doubleMatchingIndex.push(q)
            }

        }
    }

    //console.log(bakeryAMatchingIngrident[doubleMatchingIndex])
    //console.log(bakeryBMatchingIngrident)
    //console.log(recipes[doubleMatchingIndex])


    if (bakeryAMatchingIngrident[doubleMatchingIndex] !== bakeryBMatchingIngrident) {
        doubleMatchingRecipesOutput.push(recipes[doubleMatchingIndex]['name'])
        //console.log(doubleMatchingRecipesOutput)
    }
    ////////////////fish this if statement and im done !!! 
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////



    return doubleMatchingRecipesOutput
}




bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));


//REMEMBER THIS
// MAKE AN ARRAY - > WE HAVE ARRAY 1 MATCHING ALREADY
// gotta match array 1 matching with array 2 ingredients 

