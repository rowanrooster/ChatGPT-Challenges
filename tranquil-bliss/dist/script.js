const menuBtn = document.getElementById("menu-open"); // Menu BTN
const menuBox = document.getElementById("main-nav"); // Menu Container
const headerBox = document.getElementById("templ-nav"); // Navbar Container

function toggleMenu() {
    if (menuBox.style.display === "flex") {
        menuBox.style.display = "none";
        menuBtn.src = "assets/images/icon-hamburger.svg";
        headerBox.style.backgroundColor = "";
        
    } else {
        menuBox.style.display = "flex";
        menuBtn.src = "assets/images/icon-close.svg";
        headerBox.style.backgroundColor = "rgba(0, 0, 0, 1)";
    }
};

menuBtn.addEventListener("click", toggleMenu);

// Scrollreveal elements to fadeIn
ScrollReveal().reveal('.main-heading');
ScrollReveal().reveal('.intro-text');
ScrollReveal().reveal('.product-head');
ScrollReveal().reveal('.product');
ScrollReveal().reveal('.contact-box');