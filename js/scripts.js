var pingPong = function(numberInput) {
  var pingPongs = [];
  if (isNaN(numberInput)) {
    pingPongs.push("Please Enter a Valid Number");
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



// $(document).ready(function() {
//   $("form#numTranslator").submit(function(event) {
//     var numPhrase = $("input#numInput").val();
//     var results = numeralMaker(numPhrase);
//     $("#numResult").empty().append(results);
//     $("#result").show();
//     event.preventDefault();
//   });
//   $("form#Reset").submit(function(event) {
//     $("numberName")[0].reset();
//     event.preventDefault();
//   });
// });