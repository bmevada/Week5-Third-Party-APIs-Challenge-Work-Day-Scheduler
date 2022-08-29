$(document).ready(function () {
  //  View current date and Time
  var currentDay = moment().format('dddd, MMMM Do, YYYY');
  $("#currentDay").text(currentDay);

  //Each event in the planner is compared to the current time to indicate if it is a past, present or future event
  var currentHour = moment().format('H');
  $(".time-block").each(function() {
    if (parseInt(currentHour) === parseInt(this.id)) {
      $(this).addClass("present");
    } else if (parseInt(currentHour) > parseInt(this.id)) {
     $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  })

  $(".saveBtn").each(function() {
    if (parseInt(currentHour) === parseInt(this.id.split("-")[1])) {
      $(this).addClass("present");
    } else if (parseInt(currentHour) > parseInt(this.id.split("-")[1])) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  })

  //Events are saved to local storage
  var storedEvents = [];

  initialise();

  function renderEvents() {
      $("textarea").each(function() {
          this.value = "";
      })
      
      $.each(storedEvents, function() {
          $("textarea." + this.eventTime)[0].value = this.eventText;
      }) 

    

  //Retrieve events from local storage to add to planner

}