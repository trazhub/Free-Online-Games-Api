const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", navToggle);

function navToggle() {
  menuBtn.classList.toggle("active");
  const navBar = document.querySelector(".navBar");
  navBar.classList.toggle("open");
  if (navBar.classList.contains("open")) {
    navBar.style.maxHeight = navBar.scrollHeight + "px";
  } else {
    navBar.removeAttribute("style");
  }
}
