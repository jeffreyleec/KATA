const chooseRecipe = function (bakeryA, bakeryB, recipes) {
    let bakeryAMatchingIndex = []
    let bakeryBMatchingIndex = []
    let finalResult = []
    for (let i = 0; i <= recipes.length - 1; i++) { //loops recipes 
        //console.log(recipes[i]['ingredients'][0]);
        for (let j = 0; j <= recipes[i]['ingredients'].length - 1; j++) {    //loops recipes- ingredients 
            //console.log(recipes[i]['ingredients'][j]);
            for (let a = 0; a <= bakeryA.length - 1; a++) { // loops bakeryA ingredients 
                //console.log(bakeryA[a])
                if (bakeryA[a] == recipes[i]['ingredients'][j]) { //bakeryA matches with recipe ingredients list       
                    //console.log("bakery A " + bakeryA[a] + " matches recipe " + recipes[i]['name']) // 
                    bakeryAMatchingIndex.push(recipes[i]['name'])
                    //bakeryAMatchingIndex.push(i)

                }
            }

            for (let a = 0; a <= bakeryB.length - 1; a++) { // loops bakeryB ingredients 
                //console.log(bakeryB[a])
                if (bakeryB[a] == recipes[i]['ingredients'][j]) { //bakeryB matches with recipe ingredients list       
                    //console.log("bakery b " + bakeryB[a] + " matches recipe " + recipes[i]['name']) // 
                    bakeryBMatchingIndex.push(recipes[i]['name'])
                    //bakeryBMatchingIndex.push(i)

                }
            }
        }


    }
    //console.log(bakeryAMatchingIndex)
    //console.log(bakeryBMatchingIndex)

    for (let p = 0; p < bakeryAMatchingIndex.length; p++) {
        for (let m = 0; m < bakeryBMatchingIndex.length; m++) {
            if (bakeryBMatchingIndex[m] == bakeryAMatchingIndex[p]) {
                finalResult.push(bakeryBMatchingIndex[m])

            }
        }

    }
    return finalResult

}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

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


