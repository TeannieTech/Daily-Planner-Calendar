var date = dayjs().format("dddd D MMMM YYYY");
var currentHour = dayjs().hour()
var timeZones = $("textarea");

$("#currentDay").text(date);

// var currentHour = dayjs().hour();


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

// Hours loop - remove 21
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 21]
for (let i = 0; i < hours.length; i++) {
   console.log(hours[i])

   //name of all hours array is loopValue
var loopValue = hours[i]

// past styling
if (loopValue < currentHour){
    $(`#hour-${loopValue}`).addClass("past");
}
// future styling
else { $(`#hour-${loopValue}`).addClass("present");
  
}

if (loopValue === currentHour){
    $(`#hour-${loopValue}`).addClass("current");
    console.log(loopValue === currentHour, "this is present")
}
}


// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.


 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

