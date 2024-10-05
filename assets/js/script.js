// Function to randomly position shapes
function moveShape(shape) {
    const x = Math.random() * (window.innerWidth - 50); // Random x position
    const y = Math.random() * (window.innerHeight - 50); // Random y position
    
    // Set the new position
    shape.style.transform = `translate(${x}px, ${y}px)`;
    
    // Change the shape's color
    setTimeout(() => {
        shape.style.backgroundColor = shape.classList.contains('purple') ? 'orange' : 'purple';
    }, 500); // Change color after 0.5 seconds
}

// Select the shapes
const shapes = document.querySelectorAll('.shape');

// Move each shape every 1 second
setInterval(() => {
    shapes.forEach(shape => moveShape(shape));
}, 1000); // Move every 1 second
