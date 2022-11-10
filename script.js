const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navmenu");
const hamburgerr = document.getElementById("hamburger");
const navmenuu = document.getElementById("navmenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.onclick = function(clicks){
    if(clicks.target.id !== "hamburger" && clicks.target.id !== "navmenu")
    {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
    }
}