const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let bird = {
    x: 100,
    y: 300,
    radius: 20,
    color: 'red',
    dx: 0,
    dy: 0,
    launched: false
};

canvas.addEventListener('click', () => {
    if (!bird.launched) {
        bird.dx = 6;
        bird.dy = -6;
        bird.launched = true;
    }
});

function update() {
    if (bird.launched) {
        bird.x += bird.dx;
        bird.y += bird.dy;
        bird.dy += 0.3; // gravity
    }

    if (bird.y > canvas.height - bird.radius) {
        bird.y = canvas.height - bird.radius;
        bird.dy *= -0.5;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(bird.x, bird.y, bird.radius, 0, Math.PI * 2);
    ctx.fillStyle = bird.color;
    ctx.fill();
    ctx.closePath();

    requestAnimationFrame(update);
}

update();
