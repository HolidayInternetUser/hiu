document.addEventListener('mousemove', (e) => {
    const torchlight = document.querySelector('.torchlight');
    torchlight.style.left = `${e.pageX - (torchlight.clientWidth / 2)}px`;
    torchlight.style.top = `${e.pageY - (torchlight.clientHeight / 2)}px`;
});

