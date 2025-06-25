
function cutCake() {
    const cake = document.getElementById('cake');
    cake.classList.remove('hidden');
}

function startGame() {
    const container = document.getElementById('balloon-container');
    container.innerHTML = '';
    let count = 0;

    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 90 + '%';
        balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        balloon.onclick = () => {
            balloon.remove();
            count++;
            if (count === 15) {
                document.querySelector('.confetti').innerHTML = '🎊🎊🎊';
                cutCake();
                alert("Yay! You popped them all!");
            }
        };
        container.appendChild(balloon);
    }
}
