$(function () {

//save to local storage
    var hour9Recall = JSON.parse(localStorage.getItem("hour-9"));
    if (hour9Recall !== null) {
      $("#hour-9").children().eq(1).append(hour9Recall);
    }
    var hour10Recall = JSON.parse(localStorage.getItem("hour-10"));
    if (hour10Recall !== null) {
      $("#hour-10").children().eq(1).append(hour10Recall);
    }
    var hour11Recall = JSON.parse(localStorage.getItem("hour-11"));
    if (hour10Recall !== null) {
      $("#hour-11").children().eq(1).append(hour11Recall);
    }
    var hour12Recall = JSON.parse(localStorage.getItem("hour-12"));
    if (hour12Recall !== null) {
      $("#hour-12").children().eq(1).append(hour12Recall);
    }
    var hour13Recall = JSON.parse(localStorage.getItem("hour-13"));
    if (hour13Recall !== null) {
      $("#hour-13").children().eq(1).append(hour13Recall);
    }
    var hour14Recall = JSON.parse(localStorage.getItem("hour-14"));
    if (hour14Recall !== null) {
      $("#hour-14").children().eq(1).append(hour14Recall);
    }
    var hour15Recall = JSON.parse(localStorage.getItem("hour-15"));
    if (hour14Recall !== null) {
      $("#hour-15").children().eq(1).append(hour15Recall);
    }
    var hour16Recall = JSON.parse(localStorage.getItem("hour-16"));
    if (hour16Recall !== null) {
      $("#hour-16").children().eq(1).append(hour16Recall);
    }
    var hour17Recall = JSON.parse(localStorage.getItem("hour-17"));
    if (hour17Recall !== null) {
      $("#hour-17").children().eq(1).append(hour17Recall);
    }

  
  //pull entries from local storage and display in index
  function run() {
    var hour9 = $("#hour-9").children().eq(1).val();
    localStorage.setItem("hour-9", JSON.stringify(hour9));

    var hour10 = $("#hour-10").children().eq(1).val();
    localStorage.setItem("hour-10", JSON.stringify(hour10));

    var hour11 = $("#hour-11").children().eq(1).val();
    localStorage.setItem("hour-11", JSON.stringify(hour11));

    var hour12 = $("#hour-12").children().eq(1).val();
    localStorage.setItem("hour-12", JSON.stringify(hour12));

    var hour13 = $("#hour-13").children().eq(1).val();
    localStorage.setItem("hour-13", JSON.stringify(hour13));

    var hour14 = $("#hour-14").children().eq(1).val();
    localStorage.setItem("hour-14", JSON.stringify(hour14));

    var hour15 = $("#hour-15").children().eq(1).val();
    localStorage.setItem("hour-15", JSON.stringify(hour15));
    
    var hour16 = $("#hour-16").children().eq(1).val();
    localStorage.setItem("hour-16", JSON.stringify(hour16));

    var hour17 = $("#hour-17").children().eq(1).val();
    localStorage.setItem("hour-17", JSON.stringify(hour17));
  
  }
  
//display date in index
var date = dayjs();
$("#currentDay").text(date.format("dddd, MMMM, D"));

//set current hour
var time = JSON.stringify(dayjs().hour());
console.log(time);

//determine which class (past, present, future) class to add based on if the current hour matches the hour in the index

if ("9" === time) {
  $("#hour-9").addClass("present")
} else if ("9" < time) {
  $("#hour-9").addClass("past")
} else if ("9" > time) {
  $("#hour-9").addClass("future")
};

if ("10" === time) {
  $("#hour-10").addClass("present")
} else if ("10" < time) {
  $("#hour-10").addClass("past")
} else if ("10" > time) {
  $("#hour-10").addClass("future")
};

if ("11" === time) {
  $("#hour-11").addClass("present")
} else if ("11" < time) {
  $("#hour-11").addClass("past")
} else if ("11" > time) {
  $("#hour-11").addClass("future")
};

if ("12" === time) {
  $("#hour-12").addClass("present")
} else if ("12" < time) {
  $("#hour-12").addClass("past")
} else if ("12" > time) {
  $("#hour-12").addClass("future")
};

if ("13" === time) {
  $("#hour-13").addClass("present")
} else if ("13" < time) {
  $("#hour-13").addClass("past")
} else if ("13" > time) {
  $("#hour-13").addClass("future")
};

if ("14" === time) {
  $("#hour-14").addClass("present")
} else if ("14" < time) {
  $("#hour-14").addClass("past")
} else if ("14" > time) {
  $("#hour-14").addClass("future")
};

if ("15" === time) {
  $("#hour-15").addClass("present")
} else if ("15" < time) {
  $("#hour-15").addClass("past")
} else if ("15" > time) {
  $("#hour-15").addClass("future")
};

if ("16" === time) {
  $("#hour-16").addClass("present")
} else if ("16" < time) {
  $("#hour-16").addClass("past")
} else if ("16" > time) {
  $("#hour-16").addClass("future")
};

if ("17" === time) {
  $("#hour-17").addClass("present")
} else if ("17" < time) {
  $("#hour-17").addClass("past")
} else if ("17" > time) {
  $("#hour-17").addClass("future")
};


//press button to save
($(".container-lg").children().eq(0).children().eq(2)).on("click", run);
($(".container-lg").children().eq(1).children().eq(2)).on("click", run);
($(".container-lg").children().eq(3).children().eq(2)).on("click", run);
($(".container-lg").children().eq(4).children().eq(2)).on("click", run);
($(".container-lg").children().eq(5).children().eq(2)).on("click", run);
($(".container-lg").children().eq(6).children().eq(2)).on("click", run);
($(".container-lg").children().eq(7).children().eq(2)).on("click", run);
($(".container-lg").children().eq(8).children().eq(2)).on("click", run);

});