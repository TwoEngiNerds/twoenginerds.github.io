/* dark mode button */
const darkMode = document.querySelector("#darkMode");
const body = document.querySelector("body");
const bar = document.querySelectorAll(".bar");
const nav_link = document.querySelectorAll(".nav-link");
const underline = document.querySelectorAll(".parallelogram-underline");
const side_block = document.querySelectorAll(".side-block");
const pagination = document.querySelectorAll(".buttons");
const card_title = document.querySelectorAll(".card-title");
const card_desc = document.querySelectorAll(".card-description");
const summary = document.querySelectorAll(".summary");
const section_container = document.querySelector(".section-container");
const panel = document.querySelector(".panel");
const neon_content = document.querySelectorAll(".neon");

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
    section_container.classList.remove("light");
    for (let i=0; i<neon_content.length; i++) {
        neon_content[i].classList.remove("light");
    }
    panel.classList.remove("light");
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
    section_container.classList.add("light");
        for (let i=0; i<neon_content.length; i++) {
            neon_content[i].classList.add("light");
        }
    panel.classList.add("light");
}

function changeMode() {
    if (darkMode.checked) {
        enableDarkMode();
    } 
    else {
        disableDarkMode();
    }
}
