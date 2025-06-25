document.getElementById("slice-btn").addEventListener("click", function () {
  document.getElementById("cake").style.display = "none";
  const messageBox = document.createElement("div");
  messageBox.className = "cake-message";
  messageBox.innerText = `✨ The cake has been sliced! 🎂

Inside you find a hidden message......

"Dear dost, you’re not just the icing on the cake — 
you’re the whole damn dessert buffet 🍰❤️

May your life be as sweet, colourful, and unforgettable 
as this moment right here. The universe isn’t ready for your glow."

💫Happy Birthday💫
`;
  document.body.appendChild(messageBox);
});
