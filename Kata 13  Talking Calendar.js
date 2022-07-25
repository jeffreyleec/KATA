const talkingCalendar = function (date) {

    var nums = date.split('/');
    //console.log(nums);
    var month = nums[1]
    var realMonth = month - 1
    //console.log(month)
    var year = nums[0]
    var date = nums[2]
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    //console.log(date)
    if (date == 02 || date == 22) {
        date = date + "nd";
    } else if (date == 1 || date == 21 || date == 31) {
        date = date + "st";
    } else if (date == 3 || date == 23) {
        date = date + "rd";
    } else {
        date = date + "th";
    }

    var output = "";
    output = output + monthNames[realMonth] + " ";
    output = output + date + ", ";
    output = output + nums[0];
    return output;

};



//"2017/12/02"
//.0123456789.


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/23"));