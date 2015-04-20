

$(document).keyup(function(event) {
  if (event.keyCode === 39) {
    pikaleft = parseInt($("#pikachu").css("left"));
    if (pikaleft < 1475) {
      $("#pikachu").css("left", pikaleft + 50 + "px");
    }
  }

  if (event.keyCode === 83) {
    pugleft = parseInt($("#pug").css("left"));
    if (pugleft < 1430) {
      $("#pug").css("left", pugleft + 50 + "px");
    }
  }
  finishLine(pikaleft, pugleft);
} );

  function finishLine(pikaleft, pugleft) {
    if(pikaleft === 1470) {
      $("#pikachu_wins").css("display", "block");
      // alert("Pikachu has just won!")
  };
    if(pugleft === 1425) {
      $("#pug_wins").css("display", "block");
      // alert("Pug has just won!")
    }
};
