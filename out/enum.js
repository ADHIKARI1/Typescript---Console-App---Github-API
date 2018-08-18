"use strict";
var DaysofTheWeek;
(function (DaysofTheWeek) {
    DaysofTheWeek[DaysofTheWeek["SUN"] = 100] = "SUN";
    DaysofTheWeek[DaysofTheWeek["MON"] = 101] = "MON";
    DaysofTheWeek[DaysofTheWeek["TUE"] = 102] = "TUE";
    DaysofTheWeek[DaysofTheWeek["WED"] = 103] = "WED";
    DaysofTheWeek[DaysofTheWeek["THU"] = 104] = "THU";
    DaysofTheWeek[DaysofTheWeek["FRI"] = 105] = "FRI";
    DaysofTheWeek[DaysofTheWeek["SAT"] = 106] = "SAT";
})(DaysofTheWeek || (DaysofTheWeek = {}));
var day;
day = DaysofTheWeek.MON;
if (day == DaysofTheWeek.MON)
    console.log("work");
