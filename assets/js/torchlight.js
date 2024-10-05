// assets/js/torchlight.js

// Create the torchlight effect
document.addEventListener("mousemove", function(e) {
  var torch = document.getElementById("torch");

  // Update the position of the torchlight
  torch.style.left = e.pageX + "px";
  torch.style.top = e.pageY + "px";
});
