var menuButton = document.querySelector("header nav img:nth-of-type(3)");
var hetMenu = document.querySelector("header nav ul");
var deNav = document.querySelector("header nav")

menuButton.addEventListener("click", openMenu)

function openMenu(){
    hetMenu.classList.toggle("toonMenu");
    deNav.classList.add("veranderKleur");
    menuButton.src = "images/cross.png";
}

