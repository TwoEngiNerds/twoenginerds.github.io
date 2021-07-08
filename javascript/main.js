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

/* dark mode button */
const darkMode = document.querySelector("#darkMode");
const body = document.querySelector("body");
const bar = document.querySelectorAll(".bar");
const nav_link = document.querySelectorAll(".nav-link");
const nav_logo = document.querySelector(".nav-logo");
const underline = document.querySelectorAll(".parallelogram-underline");
const side_block = document.querySelectorAll(".side-block");
const pagination = document.querySelectorAll(".buttons");

darkMode.addEventListener("click", changeMode);

function changeMode() {
  if (darkMode.checked) {
    for (let i=0; i<bar.length; i++) {
      bar[i].classList.remove("light");
    }
    for (let i=0; i<underline.length; i++) {
      underline[i].classList.remove("light");
    }
    for (let i=0; i<nav_link.length; i++) {
      nav_link[i].classList.remove("light");
    }
    for (let i=0; i<side_block.length; i++) {
      side_block[i].classList.remove("light");
    }
    for (let i=0; i<pagination.length; i++) {
      pagination[i].classList.remove("light");
    }
    body.classList.remove("light");
    nav_logo.classList.remove("light");
  } 
  else {
    for (let i=0; i<bar.length; i++) {
      bar[i].classList.add("light");
    }
    for (let i=0; i<underline.length; i++) {
      underline[i].classList.add("light");
    }
    for (let i=0; i<nav_link.length; i++) {
      nav_link[i].classList.add("light");
    }
    for (let i=0; i<side_block.length; i++) {
      side_block[i].classList.add("light");
    }
    for (let i=0; i<pagination.length; i++) {
      pagination[i].classList.add("light");
    }
    body.classList.add("light");
    nav_logo.classList.add("light");
  }
}

// const darkMode = document.querySelector("#darkMode");
// darkMode.addEventListener("click", changeMode);

// const parameters = document.querySelectorAll(
//   "body",
//   ".nav-link",
//   ".nav-logo",
//   ".parallelogram-underline",
//   ".side-block"
// );

// function changeMode() {
//   if (darkMode.checked) {
//     for (let i=0; i<parameters.length; i++) {
//       parameters[i].classList.remove("light");
//     }
//   } else {
//     for (let i=0; i<parameters.length; i++) {
//       parameters[i].classList.add("light");
//     }
//   }
// }
