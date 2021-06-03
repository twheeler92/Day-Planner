var currentDay = moment().format('dddd, MMMM Do YYYY');
var currentHour = moment().format('HH')

console.log(currentDay);
console.log(currentHour);
ppf();

$(document).ready(function(){
    $("#currentDay").append(currentDay);
});

function ppf() {
    var hour = 0;

    
    for (i = 0; i <= 8; i++){
        hour = document.getElementsByClassName('row')[i].id;
        console.log("Hour slot in military time- ", hour);

        if (hour < currentHour) {
            console.log("Time frame- past");
            document.getElementsByClassName('col-8 time-block')[i].className = "col-8 time-block past";
        }
        else if (hour == currentHour) {
            console.log("Time frame- present");
            document.getElementsByClassName('col-8 time-block')[i].className = "col-8 time-block present";
    
        }
        else if (hour > currentHour) {
            console.log("Time frame- future");
            document.getElementsByClassName('col-8 time-block')[i].className = "col-8 time-block future";
    
        }
        
    }

    
    
    
    
    

}