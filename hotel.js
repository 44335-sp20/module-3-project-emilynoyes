/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
  
function genRand() {
    for (var i = 0; i < 10; i++) {
        var number = Math.floor(Math.random() * 400) + 1;
    if (number >= 100) {
    return number;
    }
    }
}



  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date

function offerExpires(date) {
var nextWeek = new Date (date.getTime() + 7*24*60*60*1000);
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    
var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var mth = month[nextWeek.getMonth()];
    
  var day = weekday[nextWeek.getDay()];
    
    return "OFFER EXPIRES NEXT " + day + "<br>" + "(" + nextWeek.getDate() + " " + mth + " " +  nextWeek.getFullYear() + ")";
}
  
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage

  document.getElementById("specialRate").innerHTML = genRand();

//create a new Date object

var date = new Date();

//Call the function passing the date object to it and write it to the offer ends section on the webpage

document.getElementById("offerEnds").innerHTML = offerExpires(date);

