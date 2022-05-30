
// // Objekt - Methode: new Date()

// let date = new Date();
// console.log(date);


// // new Date(year, month, day hours, seconds, milliseconds) -> Syntax new Date();

// date = new Date(2000, 9, 2, 11, 45, 10, 0);
// console.log(date);

// // 6 Zahlen

date = new Date(2000, 9, 2, 11, 45, 10);
// date = new Date(2000, 9, 2, 11);
// date = new Date(2000, 9, 2);
// date = new Date(2000, 9);
// console.log(date);


// console.clear();

// let result = document.getElementById("result");

// date = new Date(2000, 9, 2, 11, 45, 10);
// result.innerHTML += "<br>" + date.toUTCString() + "<br>";
// result.innerHTML += "<br>" + date.toDateString() + "<br>";
// result.innerHTML += "<br>" + date.toLocaleDateString() + "<br>";
// result.innerHTML += "<br>" + date.toLocaleTimeString() + "<br>";

// console.log(typeof (date));

// console.clear();


// console.log("%c date get Methods", "color: tomato")

// // getTime() gibt die Millisekunden vom 1.1.1970 bis zum Datum aus
// console.log(date.getTime())
// //getFullYear() g
// console.log(date.getFullYear())
// console.log(date.getMonth())

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
//
console.log("%c date get Methods", "color: tomato")

console.log(months[date.getDate()]);
// console.log("%c date get Methods", "color: tomato")

// console.log(date.getDate()); //1-31
// console.log("%c date get Methods", "color: tomato")

// console.log(date.getHours()); // 0-23
// console.log("%c date get Methods", "color: tomato")

// console.log(date.getMinutes()); // 0-59
// console.log("%c date get Methods", "color: tomato")

// console.log(date.getSeconds()); // 0-59
// console.log("%c date get Methods", "color: tomato")

// console.log(date.getMilliseconds()); //0-999
// console.log("%c date get Methods", "color: tomato")

// console.log(date.getDay())

// let date2 = new Date();
// console.log(date2);

// date2.setFullYear(2008);
// console.log(date2);

// date2.setMonth(7);
// console.log(date2);

// date2.setDate(15);
// console.log(date2);

// date2.setDate(30 + 5);
// console.log(date2);

// date2.setDate(date2.getDate() + 5);
// console.log(date2);

// console.clear();


// console.log("%c Math Methods", "color: yellow")


// let wurzel = 9;
// // let wurzel = -1; // NaN
// console.log(Math.sqrt(wurzel));

// console.log(Math.floor(3.5));

// console.log(Math.PI);
// // console.log(Math.PI * 2);


// ______________________lvl 1-1__________________________________________
console.log("%c lvl1-1 new Date()", "color: yellow")

// let date1 = document.getElementById("date1");
// let date2 = document.getElementById("date2");
// let date3 = document.getElementById("date3");
// let date4 = document.getElementById("date4");
// date1.innerHTML = new Date("September 2, 2019 09:00:00");

// date2.innerHTML = new Date(0);
// date3.innerHTML = new Date(31556908800);
// date4.innerHTML = new Date(86400000);

// ______________________lvl 1-2_________________________________________

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];
// let date5 = document.getElementById("date5");
// let date6 = document.getElementById("date6");
// let date7 = document.getElementById("date7");
// let date8 = document.getElementById("date8");
// let date9 = document.getElementById("date9");
// let date10 = document.getElementById("date10");

date5 = new Date("Februar 5, 2021 21:14:26");
// date6.innerHTML = date5;
// console.log(date5.getFullYear());
// console.log(date5.getMonth());
// console.log(date5.getDate());
// console.log(date5.getHours());
// console.log(wochenTag[date5.getDay()]);
// console.log(monate[date5.getMonth()]);


// -------------------------css uhr---------------------------------------

// date5 = new Date("Februar 5, 2021 21:14:00");
let dayname = document.getElementById("dayname")
dayname.innerHTML = wochenTag[date5.getDay()];
let daynum = document.getElementById("daynum");
daynum.innerHTML = date5.getDay();
let month = document.getElementById("month");
month.innerHTML = date5.getMonth();
let year = document.getElementById("year");
year.innerHTML = date5.getFullYear();

let hour = document.getElementById("hour");
hour.innerHTML = date5.getHours();
let minutes = document.getElementById("minutes");
minutes.innerHTML = date5.getMinutes();
let seconds = document.getElementById("seconds");
seconds.innerHTML = date5.getSeconds();




// ______________________lvl1_3
// date2.setDate(date2.getDate() + 5);


const d = new Date("Januar 1, 2016 21:14:00");
console.log(d);
d.setDate(d.getDate() + 15);
console.log(d);
d.setFullYear()

// ______________________lvl1_4 Tage in Monat
console.clear();


function tageImMonat(year, month) {
    return new Date(year, month, 0).getDate();
}

console.log(tageImMonat(2016, 1)); //31
console.log(tageImMonat(2016, 2)); //29
console.log(tageImMonat(2017, 2)); //28
console.log(tageImMonat(2017, 12)); //31



// ----------------lvl 1 5 Monatsname--------------------

const getMonthName = monthIndex => {
    let searchMonth = new Date(monthIndex);
    let list = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
    ];
    return list[searchMonth.getMonth()];
}
console.log(getMonthName("2001,3,4"));
console.log(getMonthName("2019,12,24")); //Dezember
console.log(getMonthName("1410,07,15")); //Juli


// -------lvl 1 6------ AM PM----------------
searchAmPM1 = new Date(1999, 10, 5, 15).getHours(); //PM
searchAmPM2 = new Date().getHours()
searchAmPM3 = new Date(2019, 12, 3, 12).getHours(); //AM
searchAmPM4 = new Date(2000, 1, 1, 11).getHours(); //AM

const getAmPm = inputTime => {
    // let searchAmPM = new Date(inputTime)
    if ((new Date(inputTime)) < 12) {
        console.log('AM')
    }
    else if ((new Date(inputTime)) > 12) {
        console.log('PM');
    }
    return (new Date(inputTime).getHours());
}
getAmPm(searchAmPM1);
getAmPm(searchAmPM2);
getAmPm(searchAmPM3);
getAmPm(searchAmPM4);

// console.clear()
// -------lvl 1 8--------------

let weekDay = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"

];


date5 = new Date("2.15.2001");
console.log(weekDay[date5.getDay()]);
date6 = new Date("12.15.2019");
console.log(weekDay[date6.getDay()]);
date7 = new Date("2.1.2020");
console.log(weekDay[date7.getDay()]);
date8 = new Date("5.30.2022");
console.log(weekDay[date8.getDay()]);


const evaluateDay = (date) => {
    // Samstag = 6, Sonntag = 0;
    if ((new Date(date)).getDay() === 0 || ((new Date(date)).getDay() === 6)) {
        console.log("it's weekend")
    }
    else {
        console.log("keep grindin'")
    }
    return console.log((new Date(date)).getDay());
}

evaluateDay(date5)
evaluateDay(date6);
evaluateDay(date7);
evaluateDay(date8);



