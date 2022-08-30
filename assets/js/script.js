$(document).ready(function () {
  //  View current date and Time
  var currentDay = moment().format('dddd, MMMM Do, YYYY, h:mm:ss a');
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
  function storedEvents (){
    var storedEvents = JSON.parse(window.localStorage.getItem('storedEvents')) || [];
    console.log();

  }
  function renderEvents() {
    $("textarea").each(function() {
         this.value = "";
    })
    
    $.each(storedEvents, function() {
        $("textarea." + this.eventTime)[0].value = this.eventText;
    }) 
  }

  //Retrieve events from local storage to add to planner
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));

    timeTracker();
})