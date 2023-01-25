// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

$(".saveBtn").click(function() {
  var saveBtn = $(this); /*Denotes the parent, which I guess is the save button*/
  var timeBlock = saveBtn.parent(); /*Denotes the parent of the save buttton, which is the time-block div*/
  var timeBlockId = timeBlock.attr("id"); /*Denotes the ID of the time-block*/
  var textArea = saveBtn.siblings("textarea"); /*Selects the textarea*/
  localStorage.setItem(timeBlockId, textArea.val());
});

function displayToDos() {
for (var i = 0; i < 9; i ++) {
  var saveBtn = $(this);
  var timeBlock = saveBtn.parent();
  var timeBlockId = timeBlock.attr("id");
  var textArea = saveBtn.siblings("textarea");
  var savedData = localStorage.getItem(timeBlockId, textArea.val());
  textArea.append(savedData);
}
}

displayToDos();

function changeTimeBlockColor() {

  for (var i = 0; i < 9; i++) {
  var currentHour = dayjs().hour();
  var hourBlockValue = $('.hour')[i];

    if(hourBlockValue.isBefore(currentHour)) {
      $('.time-block').addClass('past');
    }
    if (hourBlockValue.isSame(currentHour)) {
      $('.time-block').addClass('present');
    }
    if (hourBlockValue.isAfter(currentHour)) {
      $('.time-block').addClass('future')
    }
  }
}

changeTimeBlockColor();

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// loop through all time blocks and do:
// grab the id like we did above and compare to current hour using day.js api
// google day.js compare time


// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// loop through all time blocks and do:
// localStorage.getItem(time block id) -> text to place into the textarea

// TODO: Add code to display the current date in the header of the page.

// use jquery to set text of dat in header to containe current date with current time
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


