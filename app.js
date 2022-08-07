document.querySelectorAll(".hamburger-button").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    btn.classList.toggle("active");
  });
});
