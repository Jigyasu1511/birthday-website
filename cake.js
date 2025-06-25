
function cutCake() {
  const wishDiv = document.getElementById("wish");
  const message = `
✨ The cake has been sliced! 🎂

Inside you find a hidden message......

"Dear dost, you’re not just the icing on the cake — 
you’re the whole damn dessert buffet 🍰❤️

May your life be as sweet, colourful, and unforgettable 
as this moment right here. The universe isn’t ready for your glow."

💫Happy Birthday💫

`;
  wishDiv.textContent = message;
  wishDiv.style.display = "block";
}
