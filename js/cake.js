document.getElementById("slice-btn").addEventListener("click", function () {
  document.getElementById("cake").style.display = "none";

  const messageBox = document.createElement("div");
  messageBox.className = "cake-message";
  messageBox.innerHTML = `
    <div style="text-align:center; font-family:'Segoe UI', sans-serif; color:#ff6f61; padding:20px; font-size:22px;">
      ✨ The cake has been sliced! 🎂<br><br>
      <em>Inside you find a hidden message......</em><br><br>
      <strong>"Dear dost, you’re not just the icing on the cake —<br>
      you’re the whole damn dessert buffet 🍰❤️<br><br>
      May your life be as sweet, colourful, and unforgettable<br>
      as this moment right here. The universe isn’t ready for your glow."</strong><br><br>
      💫Happy Birthday💫
    </div>
  `;

  document.body.appendChild(messageBox);
});
