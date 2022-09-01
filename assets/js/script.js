$(document).ready(function () {
  //  View current date and Time
  var currentDay = moment().format('dddd Do MMMM YYYY, h:mm:ss a');
  $("#currentDay").text(currentDay);

  // Assign save button
  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //Events are saved to local storage
    localStorage.setItem(time, text);
  })


  // // //Events are saved to local storage
  // function storedEvents (){
  //   var storedEvents = JSON.parse(window.localStorage.getItem('storedEvents')) || [];
  //   console.log();

  // }
  // function renderEvents() {
  //   $("textarea").each(function() {
  //        this.value = "";
  //   })

  //   $.each(storedEvents, function() {
  //       $("textarea." + this.eventTime)[0].value = this.eventText;
  //   }) 
  // }

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

  //Event tracker
  function hourTracker() {
    var currentHour = moment().hour();

    // Loop all time-blocks
    $(".time-block").each(function () {
      console.log(this)
      var blockHour = ($(this).attr("id").replace("h", ""));
      blockHour = parseInt(blockHour)
      console.log(blockHour, currentHour)

      //Each event in the planner is compared to the current time to indicate if it is a past, present or future event

      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }

      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }

      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }
  hourTracker();
})