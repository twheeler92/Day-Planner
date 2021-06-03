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

// When button is click it identifies which button was clicked and assigns the id to the index variable used the save time-block input.
$(".saveBtn").click(function() {
    console.log("Button was clicked");
    var index = $(this).attr('id');
    console.log("index is :", index);
    var input = document.getElementsByClassName('time-block')[index].value;
    console.log("User input for time-block[", index, "] is : ", input);
    localStorage.setItem(index, input);
    location.reload();
});

// When this button is clicked it clears local storage and refreshes the page
$('.resetBtn').click(function() {
    localStorage.clear();
    location.reload();
});

// A function that sets the time frame color for the time-block using military time (ppf- past present future)
// I understand that I could have called this timeFrame() 
function ppf() {
    var hour = 0;

    // A loop that checks and compares the time for time frame and sets the color
    // Also sets saved event from user storage
    for (i = 0; i <= 8; i++){
        hour = document.getElementsByClassName('row')[i].id;
        var storedEvent = localStorage.getItem(i);

        if (hour < currentHour) {
            console.log("Hour :", hour, " | Time frame - Past");
            document.getElementsByClassName('col-8 time-block')[i].className = "col-8 time-block past";
            console.log(storedEvent);
            $('.time-block').eq(i).attr('placeholder', storedEvent);
        }
        else if (hour == currentHour) {
            console.log("Hour :", hour, " | Time frame - Present");
            document.getElementsByClassName('col-8 time-block')[i].className = "col-8 time-block present";
            console.log(storedEvent);
            $('.time-block').eq(i).attr('placeholder', storedEvent);
        }
        else if (hour > currentHour) {
            console.log("Hour :", hour, " | Time frame - Future");
            document.getElementsByClassName('col-8 time-block')[i].className = "col-8 time-block future";
            console.log(storedEvent);
            $('.time-block').eq(i).attr('placeholder', storedEvent);
        } 
    }


    
    
    
    
    

}