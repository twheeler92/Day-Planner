// 2 variables for the current day and the hour in military time 
var currentDay = moment().format('dddd, MMMM Do YYYY');
var currentHour = moment().format('HH')

// Logs for testing purposes
console.log("Current day - ", currentDay);
console.log("Current hour - ", currentHour);

// 
ppf();

// Appends the current day into the header of the page
$(document).ready(function(){
    $("#currentDay").append(currentDay);
});

$(".saveBtn").click( function() {
    console.log("Button was clicked");

    var index = $(this).attr('id');

    console.log("index is :", index);
});

// A function that sets the time frame color for the time-block using military time (ppf- past present future)
// I understand that I could have called this timeFrame() 
function ppf() {
    var hour = 0;

    // A loop that checks and compares the time for time frame and sets the color with some logs for testing purposes
    for (i = 0; i <= 8; i++){
        hour = document.getElementsByClassName('row')[i].id;

        if (hour < currentHour) {
            console.log("Hour :", hour, " | Time frame - Past");
            document.getElementsByClassName('col-8 time-block')[i].className = "col-8 time-block past";
        }
        else if (hour == currentHour) {
            console.log("Hour :", hour, " | Time frame - Present");
            document.getElementsByClassName('col-8 time-block')[i].className = "col-8 time-block present";
        }
        else if (hour > currentHour) {
            console.log("Hour :", hour, " | Time frame - Future");
            document.getElementsByClassName('col-8 time-block')[i].className = "col-8 time-block future";
        } 
    }


    
    
    
    
    

}