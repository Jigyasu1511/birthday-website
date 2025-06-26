
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("balloon-container");
  const winMessage = document.getElementById("win-message");
  const balloonCount = 15;
  let popped = 0;

  for (let i = 0; i < balloonCount; i++) {
    const balloon = document.createElement("img");
    balloon.src = "https://i.imgur.com/3J8jXxH.png";
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 90 + "vw";
    balloon.style.animationDuration = 4 + Math.random() * 3 + "s";
    container.appendChild(balloon);

    balloon.addEventListener("click", () => {
      balloon.remove();
      popped++;
      if (popped === balloonCount) {
        winMessage.classList.remove("hidden");
      }
    });
  }
});
