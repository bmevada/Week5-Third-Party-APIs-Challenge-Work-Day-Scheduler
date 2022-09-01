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
  $("#h8 .description").val(localStorage.getItem("h8"));
  $("#h9 .description").val(localStorage.getItem("h9"));
  $("#h10 .description").val(localStorage.getItem("h10"));
  $("#h11 .description").val(localStorage.getItem("h11"));
  $("#h12 .description").val(localStorage.getItem("h12"));
  $("#h13 .description").val(localStorage.getItem("h13"));
  $("#h14 .description").val(localStorage.getItem("h14"));
  $("#h15 .description").val(localStorage.getItem("h15"));
  $("#h16 .description").val(localStorage.getItem("h16"));
  $("#h17 .description").val(localStorage.getItem("h17"));
  $("#h18 .description").val(localStorage.getItem("h18"));

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