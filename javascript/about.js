const section_container = document.querySelector(".section-container");
const panel = document.querySelector(".panel");
const neon_content = document.querySelectorAll(".neon");

darkMode.addEventListener("click", changeMode);

function changeMode() {
    if (darkMode.checked) {
        section_container.classList.remove("light");
        for (let i=0; i<neon_content.length; i++) {
            neon_content[i].classList.remove("light");
        }
        panel.classList.remove("light");
    } 
    else {
        section_container.classList.add("light");
        for (let i=0; i<neon_content.length; i++) {
            neon_content[i].classList.add("light");
        }
        panel.classList.add("light");
    }
}
