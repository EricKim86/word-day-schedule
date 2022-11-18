$(function () {

//save to local storage
for (var i = 9; i < 19; i++) {
  var hour = i;
}

    var hour = JSON.parse(localStorage.getItem("hour-9"));
    if (hour !== null) {
      $("#hour-9").children().eq(1).append(hour);
    }
    var hour = JSON.parse(localStorage.getItem("hour-10"));
    if (hour !== null) {
      $("#hour-10").children().eq(1).append(hour);
    }
    var hour = JSON.parse(localStorage.getItem("hour-11"));
    if (hour !== null) {
      $("#hour-11").children().eq(1).append(hour);
    }
    var hour = JSON.parse(localStorage.getItem("hour-12"));
    if (hour !== null) {
      $("#hour-12").children().eq(1).append(hour);
    }
    var hour = JSON.parse(localStorage.getItem("hour-13"));
    if (hour !== null) {
      $("#hour-13").children().eq(1).append(hour);
    }
    var hour = JSON.parse(localStorage.getItem("hour-14"));
    if (hour !== null) {
      $("#hour-14").children().eq(1).append(hour);
    }
    var hour = JSON.parse(localStorage.getItem("hour-15"));
    if (hour !== null) {
      $("#hour-15").children().eq(1).append(hour);
    }
    var hour = JSON.parse(localStorage.getItem("hour-16"));
    if (hour !== null) {
      $("#hour-16").children().eq(1).append(hour);
    }
    var hour = JSON.parse(localStorage.getItem("hour-17"));
    if (hour !== null) {
      $("#hour-17").children().eq(1).append(hour);
    }

  
  //pull entries from local storage and display in index

  function run() {
  localStorage.setItem("hour-9", JSON.stringify($("#hour-9").children().eq(1).val()));
  localStorage.setItem("hour-10", JSON.stringify($("#hour-10").children().eq(1).val()));
  localStorage.setItem("hour-11", JSON.stringify($("#hour-11").children().eq(1).val()));
  localStorage.setItem("hour-12", JSON.stringify($("#hour-12").children().eq(1).val()));
  localStorage.setItem("hour-13", JSON.stringify($("#hour-13").children().eq(1).val()));
  localStorage.setItem("hour-14", JSON.stringify($("#hour-14").children().eq(1).val()));
  localStorage.setItem("hour-15", JSON.stringify($("#hour-15").children().eq(1).val()));
  localStorage.setItem("hour-16", JSON.stringify($("#hour-16").children().eq(1).val()));
  localStorage.setItem("hour-17", JSON.stringify($("#hour-17").children().eq(1).val()));
  }
  
//display date in index
var date = dayjs();
$("#currentDay").text(date.format("dddd, MMMM, D"));

//set current hour
var time = (dayjs().hour());
// var time = JSON.stringify(dayjs().hour());
console.log("current hour " + time);

//determine which class (past, present, future) class to add based on if the current hour matches the hour in the index


if (9 === time) {
  $("#hour-9").addClass("present")
} else if (9 < time) {
  $("#hour-9").addClass("past")
} else if (9> time) {
  $("#hour-9").addClass("future")
};

if (10 === time) {
  $("#hour-10").addClass("present")
} else if (10 < time) {
  $("#hour-10").addClass("past")
} else if (10 > time) {
  $("#hour-10").addClass("future")
};

if (11 === time) {
  $("#hour-11").addClass("present")
} else if (11 < time) {
  $("#hour-11").addClass("past")
} else if (11 > time) {
  $("#hour-11").addClass("future")
};

if (12 === time) {
  $("#hour-12").addClass("present")
} else if (12 < time) {
  $("#hour-12").addClass("past")
} else if (12 > time) {
  $("#hour-12").addClass("future")
};

if (13 === time) {
  $("#hour-13").addClass("present")
} else if (13 < time) {
  $("#hour-13").addClass("past")
} else if (13 > time) {
  $("#hour-13").addClass("future")
};

if (14 === time) {
  $("#hour-14").addClass("present")
} else if (14 < time) {
  $("#hour-14").addClass("past")
} else if (14 > time) {
  $("#hour-14").addClass("future")
};

if (15 === time) {
  $("#hour-15").addClass("present")
} else if (15 < time) {
  $("#hour-15").addClass("past")
} else if (15 > time) {
  $("#hour-15").addClass("future")
};

if (16 === time) {
  $("#hour-16").addClass("present")
} else if (16 < time) {
  $("#hour-16").addClass("past")
} else if (16 > time) {
  $("#hour-16").addClass("future")
};

if (17 === time) {
  $("#hour-17").addClass("present")
} else if (17 < time) {
  $("#hour-17").addClass("past")
} else if (17 > time) {
  $("#hour-17").addClass("future")
};


//press button to save
$("button").on("click", run);

});
