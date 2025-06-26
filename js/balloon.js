let popped = 0;
const totalBalloons = 10;

function popBalloon(balloon) {
  balloon.style.display = "none";
  popped++;

  if (popped === totalBalloons) {
    celebrateVictory();
  }
}

function celebrateVictory() {
  // Clear the game area
  const gameArea = document.getElementById("game-area");
  gameArea.innerHTML = "";

  // Change background
  document.body.style.backgroundColor = "#fff4e6"; // pastel cream
  document.body.style.backgroundImage = "url('https://i.imgur.com/8P4o7a5.gif')"; // confetti animation

  // Create animated gift box
  const giftBox = document.createElement("img");
  giftBox.src = "https://i.imgur.com/Uc1Zojy.gif";
  giftBox.alt = "Gift Box";
  giftBox.style.width = "200px";
  giftBox.style.display = "block";
  giftBox.style.margin = "20px auto";

  // Create dancing character
  const dancer = document.createElement("img");
  dancer.src = "https://i.imgur.com/GXjIN9K.gif";
  dancer.alt = "Dancing Character";
  dancer.style.width = "150px";
  dancer.style.display = "block";
  dancer.style.margin = "20px auto";

  // Create final message
  const message = document.createElement("div");
  message.innerText = "🎉 You Won My Friendship! 🎉";
  message.style.textAlign = "center";
  message.style.fontSize = "28px";
  message.style.fontWeight = "bold";
  message.style.color = "#ff5e78";
  message.style.marginTop = "20px";
  message.style.fontFamily = "'Segoe UI', sans-serif";

  // Append all elements
  gameArea.appendChild(giftBox);
  gameArea.appendChild(dancer);
  gameArea.appendChild(message);
}

// Initialize balloon click listeners on page load
window.onload = function () {
  const balloons = document.querySelectorAll(".balloon");
  balloons.forEach(balloon => {
    balloon.addEventListener("click", () => popBalloon(balloon));
  });
};
