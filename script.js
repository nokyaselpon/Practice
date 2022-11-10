const hamburger = document.getElementById("hamburger");
const navmenu = document.getElementById("navmenu");

document.onclick = function(clicks){
    if(clicks.target.id !== "hamburger" && clicks.target.id !== "navmenu")
    {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
    }
}

hamburger.onclick = function(){
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
}