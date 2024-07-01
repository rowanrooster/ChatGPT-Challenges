const myCarouselElement = document.querySelector('#testimonial-carousel')
const menuBtn = document.getElementById("nav-btn");
const menuBox = document.getElementById("main-nav");
const headerBox = document.getElementById("harmony-navbar");

function toggleMenu() {
    if (menuBox.style.display === "flex") {
        menuBox.style.display = "none";
        menuBtn.src = "assets/images/Menu-Open.svg";
        
    } else {
        menuBox.style.display = "flex";
        menuBtn.src = "assets/images/Menu-Close.svg";
    }
};

menuBtn.addEventListener("click", toggleMenu);

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 4000,
  touch: false
})

ScrollReveal().reveal('.hero-box img');
ScrollReveal().reveal('#about');
ScrollReveal().reveal('#menu');
ScrollReveal().reveal('#events');
ScrollReveal().reveal('#gallery');