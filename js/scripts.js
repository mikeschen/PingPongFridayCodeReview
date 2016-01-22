var pingPong = function(numberInput) {
  var pingPongs = [];
  for (var i = 1; i <= numberInput; i++) {
    if (i === 3) {
       pingPongs.push("ping");
    }
    else if (i === 5) {
      pingPongs.push("pong");
    }
    else if (i === 15) {
      pingPongs.push("pingpong");
    } else {
    pingPongs.push(i);
    }
  };
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