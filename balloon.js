
function createBalloon(){
  const container = document.getElementById("balloon-container");
  const b = document.createElement("div");
  b.className = "balloon";
  b.style.left = Math.random() * 90 + "%";
  b.onclick = () => { b.remove(); popped++; if (popped >= total) alert("🎉 You popped them all!"); };
  container.appendChild(b);
}
let popped = 0, total = 10;
function startGame(){
  popped = 0;
  document.getElementById("balloon-container").innerHTML = "";
  for(let i=0;i<total;i++) setTimeout(createBalloon, i*800);
}
