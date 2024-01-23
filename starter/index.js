var date = dayjs().format("dddd D MMMM YYYY");
// var currentHour = dayjs().hour().format("h m");
// var timeZones = $("textarea");

// var currentHour = dayjs().hour();

// var past = ()
// var current = ()
// var future = ()

// set all text area to current
// $(timeZones).appendTo(".present");
$("textarea").addClass("present");


// * Display the current day at the top of the calender when a user opens the planner.
$("#currentDay").text(date);

 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.



var nine= $("#nineAm");
$("nine").css("present");


 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

