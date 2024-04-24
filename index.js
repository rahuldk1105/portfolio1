document.addEventListener("mousemove", function(event) {
  var cursor = document.querySelector(".custom-cursor");
  var x = event.clientX;
  var y = event.clientY;
  cursor.style.transform = "translate(" + (x - 10) + "px, " + (y - 10) + "px)"; // Adjust offset as needed
});
