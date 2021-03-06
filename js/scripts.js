var pingPong = function(numberInput) {
  var pingPongs = [];
  if (isNaN(numberInput)) {
    pingPongs.push("Please Enter a Valid Number");
  } else if (numberInput <= 0) {
      (pingPongs.push("Please Enter a Number Greater Than 0"))
  } else {
      for (var i = 1; i <= numberInput; i++) {
        if (i % 15 === 0) {
          pingPongs.push("pingpong");
        } else if (i % 3 === 0) {
           pingPongs.push("ping");
        } else if (i % 5 === 0) {
          pingPongs.push("pong");
        } else {
          pingPongs.push(i);
        }
      }
    }
  return pingPongs;
};

$(document).ready(function() {
  $("form#pingponger").submit(function(event) {
    var number = parseInt($("input#numInput").val());
    var results = pingPong(number);
    $("#numResult").empty().append(results.join("<br>"));
    $("#result").show();
    event.preventDefault();
  });
  $("form#Reset").submit(function(event) {
    $("numResult")[0].reset();
    event.preventDefault();
  });
});