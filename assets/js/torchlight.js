// JavaScript to make the torchlight follow the mouse
document.addEventListener("mousemove", function(e) {
    var torch = document.getElementById("torch");
    torch.style.left = e.pageX + "px"; // Update the position of the torchlight
    torch.style.top = e.pageY + "px";  // Update the position of the torchlight
});
