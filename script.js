// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

//Saves our data
$(".saveBtn").click(function() {
  var saveBtn = $(this); /*Denotes the parent, which is the save button*/
  var timeBlock = saveBtn.parent(); /*Denotes the parent of the save button, which is the time-block div*/
  var timeBlockId = timeBlock.attr("id"); /*Denotes the ID of the time-block*/
  var textArea = saveBtn.siblings("textarea"); /*Selects the textarea*/
  localStorage.setItem(timeBlockId, textArea.val());
});

function displayToDos() {
for (var i = 9; i <= 17; i ++) { //Using 24-hour format, the day starts at 9 and ends at 17
  var hour = i.toString()
  var hourId = "hour-" + hour;
  $("#"+hourId).children('.event').val(localStorage.getItem(hourId))
}
}

displayToDos();
//changes the color of each time block 
function changeTimeBlockColor() {

  for (var i = 9; i < 18; i++) {
  var currentHour = parseInt(dayjs().hour());
  console.log(currentHour)
  var hourBlockValue = i;
  var hourId = "hour-" + i.toString()

    if(hourBlockValue<currentHour) {
      $("#"+hourId).children('.event').addClass('past');
    }
    else if (hourBlockValue ===currentHour) {
      $("#"+hourId).children('.event').addClass('present');
    }
    else  {
      $("#"+hourId).children('.event').addClass('future')
    }
  }
}
//calls the function to change the time block
changeTimeBlockColor();

//clears the schedule
$("#clear-btn").click(function() {
  localStorage.clear()
  location.reload()
});
});

  //Displays today's date
  window.onload = function () {
    const now = dayjs();
    displayTodaysDate(now);
  };

function displayTodaysDate(now) {
  document.getElementById('currentDay')
    .textContent = now.format('dddd, MMMM D');
}
//


