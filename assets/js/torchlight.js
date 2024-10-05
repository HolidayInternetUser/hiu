document.addEventListener('mousemove', (e) => {
    const torchlight = document.querySelector('.torchlight');
    torchlight.style.left = `${e.pageX - 75}px`; // Center the light horizontally
    torchlight.style.top = `${e.pageY - 75}px`; // Center the light vertically
});

