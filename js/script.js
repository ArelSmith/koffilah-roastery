// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Untuk menghilangkan nav diluar sidebar
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
