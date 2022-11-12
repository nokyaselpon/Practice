const hamburger = document.getElementById("hamburger")
const navmenu = document.getElementById("navmenu")
const showcase = document.getElementById("showcase")
const abt = document.getElementById("about-content")

let clickss = () => {
    hamburger.classList.toggle("active")
    navmenu.classList.toggle("active")
    abt.classList.toggle("active")
}

hamburger.addEventListener("click", clickss)

hamburger.addEventListener("click", () => {
        showcase.classList.toggle("active")
    })