let menuButton = document.getElementById("menu-btn");

let menuContainer = document.getElementById("menu-container");

/* toggle menu */

function toggleMenu(){
  menuContainer.classList.toggle("show");
}

menuButton.addEventListener("click", toggleMenu);
