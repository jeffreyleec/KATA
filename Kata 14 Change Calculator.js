const calculateChange = function (total, cash) {
    // Your code here
    var change = cash - total;

    let changeInCash = {
        twentyBill: 0, //2000
        tenBill: 0,    //1000
        fiveBill: 0,   //500
        twoBill: 0,   //200
        oneBill: 0,   //100
        quarter: 0,   //25
        dime: 0,   //10
        nickel: 0,   //5   
        penny: 0,   //1

    }
    if (change % 2000) {
        var numberOfTwentyBill = Math.floor(change / 2000)
        changeInCash.twentyBill = numberOfTwentyBill;
        change = change - 2000 * numberOfTwentyBill;


        console.log(change)
    }
    if (change < 2000) {
        delete changeInCash.twentyBill
    }

    if (change >= 1000) {
        changeInCash.tenBill = 1;
        change = change - 1000;
    } else {
        delete changeInCash.tenBill
    }

    if (change >= 500) {
        changeInCash.fiveBill = 1;
        change = change - 500;
    } else {
        delete changeInCash.fiveBill
    }

    if (change >= 400) {
        changeInCash.twoBill = 2;
        change = change - 400;
    } else if (change < 200) {
        delete changeInCash.twoBill
    }

    if (change >= 200) {
        changeInCash.twoBill = 1;
        change = change - 200;
    }

    if (change >= 100) {
        changeInCash.oneBill = 1;
        change = change - 100;
    } else {
        delete changeInCash.oneBill
    }

    if (change >= 75) {
        changeInCash.quarter = 3;
        change = change - 75;
    } else if (change < 25) {
        delete changeInCash.quarter
    }

    if (change >= 50) {
        changeInCash.quarter = 2;
        change = change - 50;
    }

    if (change >= 25) {
        changeInCash.quarter = 1;
        change = change - 25;
    }

    if (change >= 20) {
        changeInCash.dime = 2;
        change = change - 20;
    } else if (change < 20) {
        delete changeInCash.dime
    }

    if (change >= 10) {
        changeInCash.dime = 1;
        change = change - 10;
    }

    if (change >= 5) {

        hangeInCash.nickel = 1;
        change = change - 5;
    } else {
        delete changeInCash.nickel
    }

    if (change == 0) {
        delete changeInCash.penny

    } else {
        changeInCash.penny = change;
    }

    return changeInCash;
};




