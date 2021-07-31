const read_more = document.querySelectorAll(".read-more");

darkMode.addEventListener("click", changeMode);

function changeMode() {
    if (darkMode.checked) {
        for (let i=0; i<read_more.length; i++) {
            read_more[i].classList.remove("light");
        }
    } 
    else {
        for (let i=0; i<read_more.length; i++) {
            read_more[i].classList.add("light");
        }
    }
}
