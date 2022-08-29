// Add time.js file for current date and time
$(document).ready(function () {
  let NowMoment = moment().format("MMMM Do YYYY");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowMoment;
  let currentHour = moment().format("HH");

    // Onclick clear local storage and clear contents


    //Take time from the planner and compare with current time


    //Add time and events to local storage


    //Retrieve events from local storage to add to planner

}