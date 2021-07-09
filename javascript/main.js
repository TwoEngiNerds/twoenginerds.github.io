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
const card_title = document.querySelectorAll(".card-title");
const card_desc = document.querySelectorAll(".card-description");
const summary = document.querySelectorAll(".summary");
const footer = document.querySelector(".footer");

darkMode.addEventListener("click", changeMode);

function enableDarkMode() {
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
  for (let i=0; i<card_title.length; i++) {
    card_title[i].classList.remove("light");
  }
  for (let i=0; i<card_desc.length; i++) {
    card_desc[i].classList.remove("light");
  }
  for (let i=0; i<summary.length; i++) {
    summary[i].classList.remove("light");
  }
  body.classList.remove("light");
  nav_logo.classList.remove("light");
  footer.classList.remove("light");
}

function disableDarkMode() {
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
  for (let i=0; i<card_title.length; i++) {
    card_title[i].classList.add("light");
  }
  for (let i=0; i<card_desc.length; i++) {
    card_desc[i].classList.add("light");
  }
  for (let i=0; i<summary.length; i++) {
    summary[i].classList.add("light");
  }
  body.classList.add("light");
  nav_logo.classList.add("light");
  footer.classList.add("light");
}

function changeMode() {
  if (darkMode.checked) {
    enableDarkMode();
  } 
  else {
    disableDarkMode();
  }
}