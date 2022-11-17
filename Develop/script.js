// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var button9 = $("#btn9");

$(function () {
  var hour9Recall = JSON.parse(localStorage.getItem("hour-9"));
  if (hour9Recall !== null) {
    console.log(hour9Recall);
    $("#hour-9").children().eq(1).append(hour9Recall);
  }
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  function run() {

    hour9 = $("#hour-9").children().eq(1).val();

    localStorage.setItem("hour-9", JSON.stringify(hour9));

    

  }
  
//display date in index
var date = dayjs();
$("#currentDay").text(date.format('dddd, MMMM, D'))

  button9.on("click", run)
});