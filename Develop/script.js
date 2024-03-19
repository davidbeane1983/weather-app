//const button = document.getElementById("save_btn");

var save = $(".saveBtn");
console.log(save);
$("#currentDay").text(dayjs().format("dddd DD/MM/YYYY"));

localStorage.getItem("hour-9");
loopCss();

//     save to local storage
$(".time-block").each(function () {
  //console.log(this);
  let thisEl = $(this);
  let id = thisEl.attr("id");
  var text = localStorage.getItem(id);
  $(this).children(".description").val(text);
});

var interval = setInterval(loopCss, 1000);

// loop for CSS
function loopCss() {
  $(".time-block").each(function () {
    console.log(this);
    let timeEl = $(this).attr("id").substr(-2);
    console.log(timeEl);

    var currentTime = dayjs().format("HH");
    //FAKE TIME FAKE TIME FAKE TIME
    //var currentTime = 15;
    //var currentTime = parseInt(currentTime);
    var time = parseInt(timeEl);
    console.log(currentTime);

    //var element = document.getElementsByClassName("description");

    if (currentTime === time) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");

      console.log("its the same");
    } else if (currentTime < time) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
      console.log("its more");
    } else if (currentTime > time) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
      console.log("its less");
    }
  });
}

// Select the button element
const button = document.getElementById("save_btn");

// Add a click event listener
save.on("click", function () {
  // Variable to save to local storage
  console.log("i am clicked");
  //test = sibling value
  let value = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");
  console.log(value);
  console.log(time);
  // Convert the variable to a JSON string
  //let jsonString = JSON.stringify(myVariable);

  // Save the JSON string to local storage
  localStorage.setItem(time, value);
});
