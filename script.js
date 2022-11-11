const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navmenu");
const hamburgerr = document.getElementById("hamburger");
const navmenuu = document.getElementById("navmenu");
const showcase = document.querySelector(".showcase");
const showcasee = document.getElementById("showcase");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    showcase.classList.toggle("active");
})

document.onclick = function(clicks){
    if(clicks.target.id !== "hamburger" && clicks.target.id !== "navmenu" && clicks.target.id !== "showcase")
    {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
        showcase.classList.remove("active");
    }
}

