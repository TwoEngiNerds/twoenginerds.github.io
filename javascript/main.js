const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/* slide in */
const fadein = document.querySelectorAll(".fadein");
const overlay = document.querySelectorAll(".overlay");
const initial = document.querySelectorAll(".initial");

for (let i=0; i<fadein.length; i++) {
    fadein[i].addEventListener("click", function() {
        overlay[i].classList.toggle("active");
        initial[i].classList.toggle("hide");
    });
}
