document.getElementById("current-year").textContent = new Date().getFullYear();

const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");

mobileMenuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("show");
  mobileMenuToggle.classList.toggle("active");
});
