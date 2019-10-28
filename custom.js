var submission = function () {
var maleNames = ['Kwasi','Kwandwo','Kwabena','Kwaku', 'yaw','Kofi', 'Kwame']
    
var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Yaa','Afua','Ama']

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  
var date = document.getElementById("d").value;
    var month = document.getElementById("m").value;
    var year = document.getElementById("yy").value;
    var male= document.getElementById("male");
    var female = document.getElementById("female")   
    var currentDate = new Date(year + "/" + month + "/" + date);
    var currentYear = currentDate.getDay();
    if (male.checked) {
        document.getElementById("ppp").innerHTML = "your Akan name is " + maleNames[currentYear] + "and you were born on " + daysOfTheWeek[currentYear]
     }
     else if  (female.checked) {
        document.getElementById("ppp").innerHTML = "your Akan name is " + femaleNames[currentYear] + "and you were born on " + daysOfTheWeek[currentYear]
    }

}

