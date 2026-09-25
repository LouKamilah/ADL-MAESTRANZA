// Mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
mobileMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => mobileMenu.classList.add("hidden"));
});

// Formulario
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById("success-msg");
  msg.classList.remove("hidden");
  e.target.reset();
  msg.scrollIntoView({ behavior: "smooth", block: "nearest" });
  setTimeout(() => msg.classList.add("hidden"), 8000);
}

function moverSlider(direccion) {
  const slider = document.getElementById("slider");

  slider.scrollBy({
    left: direccion * 375,
    behavior: "smooth",
  });
}
