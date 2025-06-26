
document.addEventListener("DOMContentLoaded", () => {
  const cake = document.getElementById("cake");
  const message = document.getElementById("hidden-message");

  cake.addEventListener("click", () => {
    message.classList.remove("hidden");
    cake.classList.add("hidden");
  });
});
