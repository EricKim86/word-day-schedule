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
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
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

var time = new Date($.now());

//press button to save
($(".container-lg").children().eq(0).children().eq(2)).on("click", run);
($(".container-lg").children().eq(1).children().eq(2)).on("click", run);
($(".container-lg").children().eq(3).children().eq(2)).on("click", run);
($(".container-lg").children().eq(4).children().eq(2)).on("click", run);
($(".container-lg").children().eq(5).children().eq(2)).on("click", run);
($(".container-lg").children().eq(6).children().eq(2)).on("click", run);
($(".container-lg").children().eq(7).children().eq(2)).on("click", run);
($(".container-lg").children().eq(8).children().eq(2)).on("click", run);
($(".container-lg").children().eq(9).children().eq(2)).on("click", run);

});