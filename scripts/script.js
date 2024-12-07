var menuButton = document.querySelector("header nav img:nth-of-type(3)");
var hetMenu = document.querySelector("header nav ul");
var deNav = document.querySelector("header nav")
var vorigeKnop = document.querySelector(".btnPrevious")
var volgendeKnop = document.querySelector(".btnNext")
const items = document.querySelector('.carousel-items');
const totalItems = document.querySelectorAll('.carousel-items > section').length;
let currentIndex = 0;

menuButton.addEventListener("click", openMenu)

function openMenu() {
    hetMenu.classList.toggle("toonMenu");
    deNav.classList.add("veranderKleur");
    menuButton.src = "images/cross.png";
}

document.getElementById('btnPrevious').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; 
    updateCarousel();
});

document.getElementById('btnNext').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 33;
    items.style.transform = `translateX(${offset}%)`; 
}

