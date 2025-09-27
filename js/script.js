let navbarDiv = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navbarDiv.classList.add("navbar-cng");
  } else {
    navbarDiv.classList.remove("navbar-cng");
  }
});

const navbarCollapseDiv = document.getElementById("navbar-collapse");
const navbarShowBtn = document.getElementById("navbar-show-btn");
const navbarCloseBtn = document.getElementById("navbar-close-btn");
// show navbar
navbarShowBtn.addEventListener("click", () => {
  navbarCollapseDiv.classList.add("navbar-collapse-rmw");
});

// hide side bar
navbarCloseBtn.addEventListener("click", () => {
  navbarCollapseDiv.classList.remove("navbar-collapse-rmw");
});

document.addEventListener("click", (e) => {
  if (
    e.target.id != "navbar-collapse" &&
    e.target.id != "navbar-show-btn" &&
    e.target.parentElement.id != "navbar-show-btn"
  ) {
    navbarCollapseDiv.classList.remove("navbar-collapse-rmw");
  }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

let button = document.getElementById("theme-toggle-btn");

button.addEventListener("click", () => {
  if (button.checked) {
    document.querySelector("body").classList.add("dark-mode");
  } else {
    document.querySelector("body").classList.remove("dark-mode");
  }
});




// --- Control del Video de la Página de Inicio ---
const video = document.querySelector('#video .video-wrapper video');
const playBtn = document.getElementById('play-btn');

if (playBtn) { // Verificamos que el botón exista en la página actual
  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Cambia el ícono a pausa
    } else {
      video.pause();
      playBtn.innerHTML = '<i class="fas fa-play"></i>'; // Cambia el ícono a play
    }
  });
}