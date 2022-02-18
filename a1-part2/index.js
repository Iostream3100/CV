$("#colorInput").on("change", function () {
  const color = $(this).val();
  if (color === null) {
    color = "black";
  }
  $("h1").css("color", color);
});

$("#fontSizeInput").on("change", function () {
  const fontSize = $(this).val();
  if (fontSize === null) {
    fontSize = 1;
  }
  $("h1").css("fontSize", fontSize);
});
