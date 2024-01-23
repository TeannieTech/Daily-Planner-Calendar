var date = dayjs().format("dddd D MMMM YYYY");
var currentHour = dayjs().hour()
var timeZones = $("textarea");

// var currentHour = dayjs().hour();

//.hour shows current time
//id for idv hours. hour-9 change


// var past = ()
// var current = ()
// var future = ()

// show current time
$(`#hour-${currentHour}`).addClass("present");

// future
//create array called hours
// 9-5
//loop through , if current item is less that current hour add certan class 
// else add this class

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
for (let i = 0; i < hours.length; i++) {
   console.log(hours[i])

var loopValue = hours[i]

if (loopValue < currentHour){
    $(`#hour-${loopValue}`).addClass("past");
    console.log(loopValue, "im in the past")
}
else {
    console.log(loopValue, "im not in the past")
}

}

$(`#hour-${currentHour}`).addClass("present");





// * Display the current day at the top of the calender when a user opens the planner.
$("#currentDay").text(date);

 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.






 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

