var menuButton = document.querySelector("header nav img:nth-of-type(3)");
var hetMenu = document.querySelector("header nav ul");
var deNav = document.querySelector("header nav")
var vorigeKnop = document.querySelector(".btnPrevious")
var volgendeKnop = document.querySelector(".btnNext")
const items = document.querySelector('.carousel-items');
const totalItems = document.querySelectorAll('.carousel-items > section').length;
let currentIndex = 0; // Start bij de eerste slide

menuButton.addEventListener("click", openMenu)


function openMenu(){
    hetMenu.classList.toggle("toonMenu");
    deNav.classList.add("veranderKleur");
    menuButton.src = "images/cross.png";
}

document.getElementById('btnPrevious').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Ga naar de vorige slide
    updateCarousel();
});

document.getElementById('btnNext').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; // Ga naar de volgende slide
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 33; // Bereken de positie
    items.style.transform = `translateX(${offset}%)`; // Pas de verschuiving toe
}

