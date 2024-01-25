var date = dayjs().format("dddd D MMMM YYYY");
var currentHour = dayjs().hour()
var timeZones = $("textarea");

//show current date
$("#currentDay").text(date);



// show current time
$(`#hour-${currentHour}`).addClass("present");


// Hours loop - remove 21
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17,]
for (let i = 0; i < hours.length; i++) {
   console.log(hours[i])

   //name of all hours array is loopValue
var loopValue = hours[i]



if (loopValue < currentHour) {
    $(`#hour-${loopValue}`).removeClass("current future").addClass("past");
}
else if (loopValue > currentHour) {
    $(`#hour-${loopValue}`).removeClass("past current").addClass("future");
}
else {
    $(`#hour-${loopValue}`).removeClass("past future").addClass("present");
    console.log(loopValue === currentHour, "this is present");
}

}


// * event listener 

$( ".save" ).on( "click", function(event) {
    alert( "I will save this for you" );
    console.log(timeZones.value)
  console.log(event)
  } );


//local storage

function display () {
localStorage.setItem( "timeZones", textarea[4]);

textarea=localStorage.getItem("timeZones")

}
