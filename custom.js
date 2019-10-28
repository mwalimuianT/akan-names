console.log("Tomashi");
var maleNames = {
    Sunday:'Kwasi',
    Monday:'Kwandwo',
    Tuesday:'Kwabena',
    Wenesday:'Kwaku',
    Thursday:'yaw',
    Friday: 'Kofi',
    Saturday: 'Kwame',
}

var femaleNames = {
    Sunday: 'Akosua',
    Monday: 'Adwoa',
    Tuesday: 'Abenaa',
    Wednesday: 'Akua',
    Thursday:  'Yaa',
    Friday: 'Afua',
    Saturday: 'Ama',
}


function validate() {
    var gender = document.getElementsByName("gender");
    var date = document.getElementById("d").value;
    var month = document.getElementById("m").value;
    var year = document.getElementById("yy"),value;
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    if(isNaN(date) || date === null || date === ""||date < 1 || date > 31){
        alert("invalid date!");
        return false
    }

    var groupOfDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(isNaN(month) || month===""|| month ===null || month <1 || month>12){
        alert("invalid month");
        return false
    }
    if(month===1 || month>2){
        if (date>groupOfDays[month-1])
        {
            alert("invalid date format!");
            return false
        }
    }
    if(month===1 || month>2){
        if (date>groupOfDays[month-1])
        {
            alert("Invalid date flow!");
            return false
        }
    }
    if(month===2){
        var leapyear = false;
        if ((!(year % 4)&& year % 100)||!(year % 400))
        {
            leapyear = true;
        }
        if((leapyear==false)&&(date>=29))
        {
            alert("invalid date form!");
            return false
        }
        if ((leapyear==true)&&(date>29))
        {
            alert("Invalid date!");
            return false
        }
    }
    if(isNaN(year)||year===""||year=== null||year <2000|| year>currentYear)
    alert("invalid year");
    return false
}

// if(sex[0].checked === false && sex[1].checked === false) {
//     alert("choose gender");
// }else {
//     for (var i =0; i < sex.length;i++) {
//         if(sex[i].checked) {
//             alert(sex[i].value);
//             sex = sex[i].value;
//         }
//     }
// }

function myreposity(){
    var a = validate();
    var DD = parseInt(a.userDate);
    var MM = parseInt(a.useMonth);
    var newYear = a.userYear;
    var newSex = a.userSex;
    var a =Math.floor((14-MM)/12);
    var y =newYear-a;
    var m =MM + 12*a-2
    var dayofTheWeek = (DD+y+Math.floor(y/4)-Math.floor(y/100)+Math.floor(newYear/400)+Math.floor((31*m)/12))%7;
    var dayofTheWeek = new Array('Sunday', 'Monday', 'Tuesday','Wenesday','Thursday','Friday','Saturday');
    var officialDay =daysofTheWeek[dayofTheWeek];
    if (newSex ==='female') {
        for (var name in femaleNames) {
            if(femaleNames.hasPersonalProperty(name)) {
                if(name ===officialDay){
                    alert("Your Akan name is"+femaleNames[name]);
                }
            }
        }
    }  
    else if (newSex==='male') {
        for(var name in maleNames) {
            if(maleNames.hasPersonalProperty(name)){
                if(name===officialDay) {
                    alert("Your Akan name is"+maleNames[name]);
                }
            }
        }
    }
}