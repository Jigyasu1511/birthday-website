
document.addEventListener("DOMContentLoaded", () => {
  const gameArea = document.getElementById("game-area");
  const totalBalloons = 12;
  let popped = 0;

  for (let i = 0; i < totalBalloons; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    const randomLeft = Math.random() * 90;
    const delay = Math.random() * 5;
    balloon.style.left = `${randomLeft}vw`;
    balloon.style.animationDelay = `${delay}s`;

    balloon.addEventListener("click", () => {
      balloon.remove();
      popped++;
      if (popped === totalBalloons) showWin();
    });

    gameArea.appendChild(balloon);
  }

  function showWin() {
    gameArea.innerHTML = '';
    const winBox = document.createElement('div');
    winBox.style.textAlign = 'center';
    winBox.style.marginTop = '20vh';

    winBox.innerHTML = `
      <img src="https://media.giphy.com/media/3ohhwF34cGDoFFhRfy/giphy.gif" width="130">
      <h1 style="color:#ff6f61;">🎁 You Won My Friendship! 🎉</h1>
      <img src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif" width="180">
      <br><br>
      <a href="thankyou.html" style="font-size: 18px; text-decoration: none; background:#ff6f61; padding:10px 20px; color:white; border-radius:6px;">Next ➤</a>`;

    gameArea.appendChild(winBox);
  }
});
