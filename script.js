const modeToggle = document.getElementById("mode-toggle");
const navbar = document.querySelector(".navbar");

modeToggle.addEventListener("click", function() {
  navbar.classList.toggle("dark-mode");
});
