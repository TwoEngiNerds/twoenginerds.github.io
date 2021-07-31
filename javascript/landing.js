const landing_logo = document.querySelector(".landing-logo");

darkMode.addEventListener("click", changeMode);

function changeMode() {
    if (darkMode.checked) {
        landing_logo.classList.remove("light");
    } 
    else {
        landing_logo.classList.add("light");
    }
}
